const { test, expect } = require('@playwright/test');

test('Login test for healthcare system', async ({ page }) => {
  // Navigate to the login page
  await page.goto('http://localhost:3001/login');

  // Add a log to check if the page is loaded
  console.log('Navigated to the login page');

  // Take a screenshot before waiting for the selector
  await page.screenshot({ path: 'screenshots/before-waiting-for-selector.png' });

  // Wait for the username input to be visible
  await page.waitForSelector('input[name="username"]', { timeout: 60000 });

  // Add a log to check if the username input is found
  console.log('Username input found');

  // Fill in the login form
  await page.fill('input[name="username"]', 'testuser');
  await page.fill('input[name="password"]', 'password123');

  // Take a screenshot before submitting the form
  await page.screenshot({ path: 'screenshots/before-submitting-form.png' });

  // Submit the login form
  await page.click('button[type="submit"]');

  // Wait for navigation to the dashboard
  await page.waitForNavigation();

  // Check for successful login (assuming a redirect to the dashboard or a success message)
  await expect(page).toHaveURL('http://localhost:3001/dashboard'); // Adjust the URL as needed
  await expect(page.locator('text=Welcome, testuser')).toBeVisible(); // Adjust the welcome message as needed

  // Take a screenshot after successful login
  await page.screenshot({ path: 'screenshots/after-login.png' });
});
