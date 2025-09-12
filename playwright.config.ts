import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'tests/gui',
  use: {
    baseURL: 'http://localhost:5173',
  },
});
