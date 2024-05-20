const { test, expect } = require('@playwright/test');

test('Login test for healthcare system', async ({ page }) => {
  await page.goto('http://localhost:3001/login');

  // Fill in the login form
  await page.fill('input[name="username"]', 'testuser');
  await page.fill('input[name="password"]', 'password123');

  // Submit the login form
  await page.click('button[type="submit"]');

  // Check for successful login (assuming a redirect to the homepage or a success message)
  await expect(page).toHaveURL('http://localhost:3000/dashboard'); // or the URL where the user is redirected after login
  await expect(page.locator('text=Welcome, testuser')).toBeVisible(); // assuming a welcome message is displayed after login
});
