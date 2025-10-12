import { test, expect } from './fixtures/read-only-supabase';
import { mockEdgeFunctions } from './fixtures/edge-functions';

const paths: string[] = [
  '/',
  '/auth',
  '/events',
  '/socials',
  '/club/field',
  '/club/teams',
  '/club/board',
  '/club/values',
  '/club/news',
  '/club/history',
  '/club/sponsors',
  '/club/sfeer',
  '/club/privacy',
  '/membership/info',
  '/membership/register',
  '/membership/insurance',
  '/membership/contact',
  '/shop',
  '/sporting/training',
  '/sporting/how-to-play',
  '/sporting/rules',
  '/sporting/stick-guide',
  '/sporting/coaches-info',
];

const edgeFunctionPaths: string[] = ['/', '/socials', '/club/field'];
// Add new edge-function pages to edgeFunctionPaths and mockedEdgeFunctionPaths.
// Tests for pages present in edgeFunctionPaths but not in mockedEdgeFunctionPaths
// will be skipped to avoid hitting real endpoints.
const mockedEdgeFunctionPaths: string[] = ['/', '/socials', '/club/field'];
const unmockedEdgeFunctionPaths = edgeFunctionPaths.filter(
  (p) => !mockedEdgeFunctionPaths.includes(p)
);

for (const path of paths) {
  const run = unmockedEdgeFunctionPaths.includes(path) ? test.skip : test;
  run(`loads ${path}`, async ({ page }) => {
    if (mockedEdgeFunctionPaths.includes(path)) {
      await mockEdgeFunctions(page);
    }
    const errors: string[] = [];
    page.on('pageerror', (err) => errors.push(err.message));
    await page.goto(path);
    expect(errors).toHaveLength(0);
  });
}
