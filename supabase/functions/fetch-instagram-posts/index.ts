import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const accessToken = Deno.env.get('INSTAGRAM_ACCESS_TOKEN');
    
    if (!accessToken) {
      console.error('Instagram access token not found');
      return new Response(
        JSON.stringify({ error: 'Instagram access token not configured' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    console.log('Fetching Instagram posts...');

    // Fetch media from Instagram Basic Display API
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,timestamp,permalink&limit=5&access_token=${accessToken}`
    );

    if (!response.ok) {
      console.error('Instagram API error:', response.status, await response.text());
      return new Response(
        JSON.stringify({ error: 'Failed to fetch Instagram posts' }),
        { 
          status: response.status, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    const data = await response.json();
    console.log('Instagram API response:', data);

    // Transform the data to match our interface
    const posts = data.data?.map((post: any) => ({
      id: post.id,
      caption: post.caption || '',
      media_url: post.media_url,
      media_type: post.media_type,
      timestamp: post.timestamp,
      permalink: post.permalink
    })) || [];

    return new Response(
      JSON.stringify({ posts }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );

  } catch (error) {
    console.error('Error fetching Instagram posts:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});