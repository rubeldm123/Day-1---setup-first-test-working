// playwright.config.js
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  retries: 1,

  // ✅ Reporters: HTML + Allure
  reporter: [
    ['html', { open: 'never' }],
    ['allure-playwright'],
  ],

  // ✅ Global "use" defaults (can still run with --headed)
  use: {
    headless: true,
    screenshot: 'only-on-failure',  // ✅ auto screenshot
    trace: 'on-first-retry',        // ✅ trace on retry
    video: 'retain-on-failure',     // ✅ video on failure
  },

  // ✅ Force Chrome browser via project
  projects: [
    {
      name: 'Chrome',
      use: {
        browserName: 'chromium',
        channel: 'chrome',          // ✅ runs Google Chrome (not bundled Chromium)
      },
    },
  ],
});
