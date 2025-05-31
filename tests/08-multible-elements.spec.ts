import { test, expect} from '@playwright/test'
test.describe('Playwright Action', ()=>{
    test.beforeEach(async({page})=>{
        await page.goto('https://www.techglobal-training.com')
    })
    test('validate headers', async({page}) => {
        const headerElements = page.locator('[class^="Header_menus"]>div')
        //console.log(await headerElements.count())
        expect(await headerElements.count()).toBe(3)
        const expectedHeaderTexets = ['Testing', 'Exercises', 'Mock Interviews']
        // console.log(await headerElements.first().innerText())
        // console.log(await headerElements.nth(1).innerText())
        // console.log(await headerElements.last().innerText())

        for (let i = 0; i < await headerElements.count(); i++){
            expect(await headerElements.nth(i).innerText()).toBe(expectedHeaderTexets[i])
        }
    })
  /*
  Go to "https://www.techglobal-training.com"
  Validate the footer has 5 social media items
    Each has an href containing "techglobal"
    Each has target attribute equals "_blank"
  */
    test('Vaildate footer', async({page}) => {
        const footerElements = page.locator('[class^="Footer_socials"] > a')
        //console.log(await footerElements.count())
        expect(await footerElements.count()).toBe(5)

        const expectedText = 'techglobal'
        const expectedAtrrVal = '_blank'
        for (let i = 0; i < await footerElements.count(); i++){
            const elementsAtrr = await footerElements.nth(i).getAttribute('href')
            expect(elementsAtrr).toContain(expectedText)
            const elementsTarget = await footerElements.nth(i).getAttribute('target')
            expect (elementsTarget).toContain(expectedAtrrVal)
        }
    })
})