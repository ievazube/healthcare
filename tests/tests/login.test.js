const { test, expect } = require('@playwright/test');

test('Login test for healthcare system', async ({ page }) => {
  // Navigate to the login page
  await page.goto('http://localhost:3000/login');

  // Wait for the username input to be visible
  await page.waitForSelector('input[name="username"]');

  // Fill in the login form
  await page.fill('input[name="username"]', 'testuser');
  await page.fill('input[name="password"]', 'password123');

  // Submit the login form
  await page.click('button[type="submit"]');

  // Wait for a successful login indication
  await page.waitForSelector('text=User logged in successfully');

  // Check that the successful login message is visible
  const successMessage = await page.textContent('text=User logged in successfully');
  expect(successMessage).toBe('User logged in successfully');
});
