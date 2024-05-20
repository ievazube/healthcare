const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  reporter: [
    ['dot'],
    ['junit', { outputFile: 'test-results/results.xml' }]
  ],
  use: {
    browserName: 'chromium',
    headless: false,
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
