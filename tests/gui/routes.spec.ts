import { test, expect } from '@playwright/test';

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
  '/admin',
  '/admin/announcements',
  '/admin/teams',
  '/admin/sponsors',
  '/admin/sponsors/new',
  '/admin/sponsors/edit/1',
  '/admin/board-members',
  '/admin/board-members/new',
  '/admin/board-members/edit/1',
  '/admin/teams/new',
  '/admin/teams/edit/1',
  '/admin/announcements/new',
  '/admin/announcements/edit/1',
];

for (const path of paths) {
  test(`loads ${path}`, async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', err => errors.push(err.message));
    await page.goto(path);
    expect(errors).toHaveLength(0);
  });
}
