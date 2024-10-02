const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://prajapatihet.github.io');
    await page.screenshot({ path: 'screenshot.png' });
    await browser.close();
})();