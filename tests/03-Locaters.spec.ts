import { test, expect } from '@playwright/test';
test.describe('', () => {
    test.beforeEach(async({page}) => {
        await page.goto('https://www.techglobal-training.com/frontend/html-elements')
    })
    test.skip('', async({page}) =>{
        await expect(page.locator('#afafs')).toBeVisible()
    })
    test('CSS - Xpath Locaters', async({page}) => {
        page.locator('')
    })
})
