module.exports = {
  testDir: './tests',
  reporter: [
    ['list'],
    ['junit', { outputFile: 'playwright-report/results.xml' }]
  ],
  use: {
    headless: true,
  },
};
