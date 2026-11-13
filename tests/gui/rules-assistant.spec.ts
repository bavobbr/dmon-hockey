import { test, expect } from './fixtures/read-only-supabase';

test('uses Belgian rules and starts a new question without old history', async ({ page }) => {
  const requests: { country: string; history: unknown[] }[] = [];
  await page.route('**/chat', async route => {
    requests.push(route.request().postDataJSON());
    await route.fulfill({ json: {
      answer: 'Een groene kaart duurt twee minuten.',
      variant: 'indoor',
      source_docs: [],
    } });
  });
  await page.goto('/sportief/regels-assistent');
  // Wait for hydration before typing into the controlled input.
  await page.waitForTimeout(1500);
  const input = page.getByPlaceholder('Stel een vraag over hockeyregels...');
  await input.fill('Hoe lang duurt een groene kaart?');
  await page.getByRole('button', { name: 'Vraag versturen' }).click();
  await expect(page.getByText('Een groene kaart duurt twee minuten.', { exact: true })).toBeVisible();
  expect(requests[0].country).toBe('BEL');
  await input.fill('En bij outdoor?');
  await page.getByRole('button', { name: 'Vraag versturen' }).click();
  await expect(page.getByRole('button', { name: 'Nieuwe vraag' })).toBeEnabled();
  expect(requests[1].history).toEqual([
    { role: 'user', content: 'Hoe lang duurt een groene kaart?' },
    { role: 'assistant', content: 'Een groene kaart duurt twee minuten.' },
  ]);
  await page.getByRole('button', { name: 'Nieuwe vraag' }).click();
  await input.fill('Wat is een strafcorner?');
  await page.getByRole('button', { name: 'Vraag versturen' }).click();
  await expect(page.getByText('Een groene kaart duurt twee minuten.', { exact: true })).toBeVisible();
  expect(requests[2].history).toEqual([]);
});