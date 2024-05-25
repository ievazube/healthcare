const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  timeout: 60000,
  use: {
    headless: true, // Set to false if you want to see the browser
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
  },
  reporter: [
    ['list'],
    ['junit', { outputFile: 'reports/test-results.xml' }]
  ],
});
