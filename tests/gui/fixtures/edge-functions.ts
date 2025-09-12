import { Page } from '@playwright/test';

/**
 * Mocks Supabase edge function calls for Playwright tests.
 * Intercepts requests to the Instagram posts and Mapbox token edge functions.
 */
export async function mockEdgeFunctions(page: Page) {
  await page.route('**/functions/v1/fetch-instagram-posts', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        posts: [
          {
            id: '1',
            caption: 'mock post',
            media_url: '/placeholder.svg',
            media_type: 'IMAGE',
            timestamp: '2024-01-01T00:00:00Z',
            permalink: 'https://example.com/p/mock'
          }
        ]
      })
    });
  });

  await page.route('**/functions/v1/get-mapbox-token', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ token: 'mock-mapbox-token' })
    });
  });
}
