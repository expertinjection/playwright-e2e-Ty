import {chromium, test} from "@playwright/test"
test('setting a page', async() => {
    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://www.techglobal-training.com/')
})