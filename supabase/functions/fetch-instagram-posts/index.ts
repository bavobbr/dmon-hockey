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
    const { limit = 5 } = await req.json().catch(() => ({ limit: 5 }));

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Get token from database
    const { data: tokenData, error: tokenError } = await supabase
      .from('instagram_tokens')
      .select('access_token, expires_at')
      .order('created_at', { ascending: false })
      .limit(1)
      .maybeSingle();

    let accessToken = tokenData?.access_token;

    // Fallback to env var if no token in database
    if (!accessToken) {
      accessToken = Deno.env.get('INSTAGRAM_ACCESS_TOKEN');
    }

    if (!accessToken) {
      console.error('Instagram access token not found');
      return new Response(JSON.stringify({
        error: 'Instagram access token not configured'
      }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // Check if token needs refresh (less than 7 days until expiry)
    if (tokenData?.expires_at) {
      const expiresAt = new Date(tokenData.expires_at);
      const now = new Date();
      const daysUntilExpiry = (expiresAt.getTime() - now.getTime()) / (1000 * 60 * 60 * 24);
      
      if (daysUntilExpiry < 7 && daysUntilExpiry > 0) {
        console.log(`Token expires in ${daysUntilExpiry.toFixed(1)} days, triggering refresh...`);
        // Trigger refresh in background (don't await)
        fetch(`${supabaseUrl}/functions/v1/refresh-instagram-token`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${supabaseServiceKey}`,
            'Content-Type': 'application/json'
          }
        }).catch(err => console.error('Background refresh failed:', err));
      }
    }

    console.log(`Fetching ${limit} Instagram posts...`);
    
    // Fetch media from Instagram Graph API
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,timestamp,permalink&limit=${limit}&access_token=${accessToken}`
    );

    if (!response.ok) {
      console.error('Instagram API error:', response.status, await response.text());
      return new Response(JSON.stringify({
        error: 'Failed to fetch Instagram posts'
      }), {
        status: response.status,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    const data: {
      data?: Array<{
        id: string;
        caption?: string;
        media_url: string;
        media_type: string;
        timestamp: string;
        permalink: string;
      }>;
    } = await response.json();

    console.log('Instagram API response:', data);

    // Transform the data to match our interface
    const posts = data.data?.map((post) => ({
      id: post.id,
      caption: post.caption ?? '',
      media_url: post.media_url,
      media_type: post.media_type,
      timestamp: post.timestamp,
      permalink: post.permalink
    })) || [];

    return new Response(JSON.stringify({ posts }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Error fetching Instagram posts:', error);
    return new Response(JSON.stringify({
      error: 'Internal server error'
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
});
