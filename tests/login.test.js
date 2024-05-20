const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({ headless: false }); // Set headless: false to see the browser actions
    const page = await browser.newPage();

    // Increase the timeout to 60 seconds
    await page.setDefaultTimeout(60000);

    try {
        console.log('Navigating to the login page...');
        await page.goto('http://localhost:8080/login');

        console.log('Waiting for the username input field...');
        await page.waitForSelector('input[name="username"]', { timeout: 60000 });

        console.log('Filling in the username...');
        await page.fill('input[name="username"]', 'testuser');

        console.log('Filling in the password...');
        await page.fill('input[name="password"]', 'password123');

        console.log('Clicking the login button...');
        await page.click('button[name="login"]');

        console.log('Waiting for the success message...');
        const successMessage = await page.waitForSelector('#success-message', { timeout: 60000 });
        const messageText = await successMessage.textContent();
        console.log('Success message:', messageText);
    } catch (error) {
        console.error('An error occurred during the test execution:', error);
    } finally {
        await browser.close();
    }
})();
