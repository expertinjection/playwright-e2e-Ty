import { test, expect} from '@playwright/test'
test.describe('Playwright Action', ()=>{
    test.beforeEach(async({page})=>{
        await page.goto('https://www.techglobal-training.com/frontend/actions')
    })
    test('Validate Click on me Button', async({page}) =>{
        await page.locator('#click').click()
        expect(await page.locator('#click_result').innerText()).toBe('You clicked on a button!')
     
    })
    test('Validate Right-click on me Button', async({page}) =>{
        await page.locator('#right-click').click({ button : 'right' })
        expect(await page.locator('#right_click_result').innerText()).toBe('You right-clicked on a button!')
     
    })
    test('Validate double click on me Button', async({page}) =>{
        await page.locator('#double-click').dblclick()
        expect(await page.locator('#double_click_result').innerText()).toBe('You double-clicked on a button!')
     
    })
    test('Validate darg and drop ', async({page}) =>{
        await page.locator('#double-click').dblclick()
        expect(await page.locator('#double_click_result').innerText()).toBe('You double-clicked on a button!')
     
    })
    test('fill-clear input box', async({page}) =>{
        const inputel = page.locator('#input_box')
        await inputel.fill('Playwright')
        expect(await inputel.getAttribute('value')).toBe('Playwright')
        await inputel.clear()
        await inputel.fill('TypeScript')
        expect(await inputel.getAttribute('value')).toBe('TypeScript')

    })
})