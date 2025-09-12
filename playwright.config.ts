import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.test' });

export default defineConfig({
  testDir: 'tests/gui',
  use: {
    baseURL: 'http://localhost:8080',
  },
});
