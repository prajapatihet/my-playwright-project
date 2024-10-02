const { chromium } = require('playwright');
require('dotenv').config();

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    await authenticate(page);

    await browser.close();
})();

async function authenticate(page) {
    await page.goto(process.env.DEMO_URL);
    await page.locator("[name='email']").fill(process.env.DEMO_USERNAME);
    await page.locator("[name='password']").fill(process.env.DEMO_PASSWORD);
    await page.locator('xpath=/html/body/div/div/div/div/div/div/main/section/section/section/section/div/section/div/button').click();
    const text = await page.locator('#__next > div.layout-content-wrapper.content-wrapper > div:nth-child(1) > section > div > div.My-Profile-Parent > div.main-head-wrapper > div').textContent();
    if (text != "My Profile") {
        console.log("Authentication failed");
    }
    await page.screenshot({ path: 'login.png' });
}