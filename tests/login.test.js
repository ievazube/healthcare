const { test, expect } = require('@playwright/test');

test('Login test for healthcare system', async ({ page }) => {
    try {
        // Increase the timeout for this test
        test.setTimeout(60000); // 60 seconds

        console.log('Navigating to the login page...');
        await page.goto('http://localhost:3001/login', { timeout: 60000 });

        console.log('Filling in the username...');
        await page.fill('input[name="username"]', 'testuser');

        console.log('Filling in the password...');
        await page.fill('input[name="password"]', 'password123');

        console.log('Clicking the login button...');
        await page.click('button[name="login"]');

        console.log('Waiting for the success message...');
        await page.waitForSelector('#success-message', { timeout: 30000 });

        const successMessage = await page.textContent('#success-message');
        console.log('Success message:', successMessage);
        expect(successMessage).toBe('Login successful');
    } catch (error) {
        console.error('Test failed:', error);
        throw error; // Re-throw the error to ensure the test fails
    }
});
