const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  reporter: [
    ['dot'],
    ['junit', { outputFile: 'playwright-report/results.xml' }]
  ],
  use: {
    browserName: 'chromium',
    headless: true, // Set to true for CI environments
    baseURL: 'http://localhost:8080',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
