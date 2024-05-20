const { test, expect } = require('@playwright/test');

test('Homepage should load correctly', async ({ page }) => {
  // Navigate to the homepage
  await page.goto('http://localhost:3001'); // Replace with the actual URL of your healthcare system

  // Check that the title is correct
  await expect(page).toHaveTitle(/Healthcare System/i);

  // Check that the welcome message is visible
  await expect(page.locator('text=Welcome to the Healthcare System')).toBeVisible();

  // Check that the navigation menu is visible
  await expect(page.locator('nav')).toBeVisible();
});
