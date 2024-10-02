const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://prajapatihet.github.io');
    await page.screenshot({ path: 'screenshot.png' });

    // const button = await page.$('.submit-btn') -- used to select first btn with class submit-btn

    // const button = await page.$x('//button[contains(@class, "submit-btn")]') -- used to select button which not easily   select using simple selector 

    await browser.close();
})();

