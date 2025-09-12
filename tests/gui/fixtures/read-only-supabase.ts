import { test as base, expect } from '@playwright/test';

export const test = base.extend({
  page: async ({ page }, use) => {
    const blocked: string[] = [];
    await page.route('**/rest/v1/**', async (route) => {
      if (route.request().method() !== 'GET') {
        blocked.push(`${route.request().method()} ${route.request().url()}`);
        await route.abort();
      } else {
        await route.continue();
      }
    });
    await use(page);
    expect(blocked, `Supabase write requests were blocked:\n${blocked.join('\n')}`).toHaveLength(0);
  },
});

export { expect } from '@playwright/test';
