import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Get current token from database
    const { data: tokenData, error: fetchError } = await supabase
      .from('instagram_tokens')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(1)
      .maybeSingle();

    if (fetchError) {
      console.error('Error fetching token:', fetchError);
      return new Response(JSON.stringify({ error: 'Failed to fetch token' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    if (!tokenData) {
      // No token in database, try to use the secret as initial token
      const initialToken = Deno.env.get('INSTAGRAM_ACCESS_TOKEN');
      if (!initialToken) {
        return new Response(JSON.stringify({ error: 'No Instagram token found' }), {
          status: 404,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }

      // Insert initial token with 60 day expiry
      const expiresAt = new Date();
      expiresAt.setDate(expiresAt.getDate() + 60);

      const { error: insertError } = await supabase
        .from('instagram_tokens')
        .insert({
          access_token: initialToken,
          expires_at: expiresAt.toISOString()
        });

      if (insertError) {
        console.error('Error inserting initial token:', insertError);
        return new Response(JSON.stringify({ error: 'Failed to store initial token' }), {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }

      return new Response(JSON.stringify({ 
        message: 'Initial token stored successfully',
        expires_at: expiresAt.toISOString()
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // Check if token needs refresh (refresh if less than 7 days until expiry)
    const expiresAt = new Date(tokenData.expires_at);
    const now = new Date();
    const daysUntilExpiry = (expiresAt.getTime() - now.getTime()) / (1000 * 60 * 60 * 24);

    if (daysUntilExpiry > 7) {
      return new Response(JSON.stringify({ 
        message: 'Token still valid',
        days_until_expiry: Math.floor(daysUntilExpiry),
        expires_at: tokenData.expires_at
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    console.log(`Token expires in ${daysUntilExpiry.toFixed(1)} days, refreshing...`);

    // Refresh the token
    const refreshUrl = `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${tokenData.access_token}`;
    const refreshResponse = await fetch(refreshUrl);

    if (!refreshResponse.ok) {
      const errorText = await refreshResponse.text();
      console.error('Instagram refresh error:', errorText);
      return new Response(JSON.stringify({ error: 'Failed to refresh Instagram token' }), {
        status: refreshResponse.status,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    const refreshData: { access_token: string; expires_in: number } = await refreshResponse.json();
    
    // Calculate new expiry (expires_in is in seconds)
    const newExpiresAt = new Date();
    newExpiresAt.setSeconds(newExpiresAt.getSeconds() + refreshData.expires_in);

    // Update token in database
    const { error: updateError } = await supabase
      .from('instagram_tokens')
      .update({
        access_token: refreshData.access_token,
        expires_at: newExpiresAt.toISOString()
      })
      .eq('id', tokenData.id);

    if (updateError) {
      console.error('Error updating token:', updateError);
      return new Response(JSON.stringify({ error: 'Failed to update token' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    console.log('Token refreshed successfully, new expiry:', newExpiresAt.toISOString());

    return new Response(JSON.stringify({ 
      message: 'Token refreshed successfully',
      expires_at: newExpiresAt.toISOString()
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Error in refresh-instagram-token:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
});
