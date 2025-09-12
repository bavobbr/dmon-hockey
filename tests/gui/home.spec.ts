import { test, expect } from './fixtures/read-only-supabase';

test('home page displays club name', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'D-mon Hockey Club' })).toBeVisible();
});
