const { chromium } = require('playwright');
const { expect } = require('playwright/test');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://prajapatihet.github.io');
    await page.screenshot({ path: 'screenshot.png' });

    // const button = await page.$('.submit-btn') -- used to select first btn with class submit-btn

    // const button = await page.$x('//button[contains(@class, "submit-btn")]') -- used to select button which not easily   select using simple selector 

    // await page.click('#submit-button') -- used to click on button having id submit-button

    // await page.type('input[name="username"]', 'myusername'); --- type 'myusername' into the input field having name username

    // await page.selectOption('#country-select', 'US') --selects the option with the value US


    //Assertions in Playwright

    // await expect(page.locator('button#login')).toBeVisible();  -- check whether button with id login is visible or not

    // await expect(page.locator('#welcome-message')).toHaveText('Welcome back, User!') -- check whether text value match or not

    // await expect(page.locator('.list-item')).toHaveCount(3)  -- check the length of list is 3 or not

    // await expect(page.locator('#submit-button')).toBeEnabled();  -- checks button is Enabled or not

    await browser.close();
})();

