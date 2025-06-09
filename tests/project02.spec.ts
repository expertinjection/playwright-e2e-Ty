import {test, expect} from '@playwright/test'

test.describe('Project01 Playwright', () =>{
    test.beforeEach(async({page}) => {
        await page.goto('https://techglobal-training.com/frontend/shopping-cart')
    })
    test('Test Case 01 - Available Courses Section Validation', async({page}) => {
        const heading = page.locator('h1[class="mt-2 mb-4"]')
        await expect(heading).toHaveText('Available Courses')
        const courses = page.locator('div[class^="Project8_course"]')
        await expect(courses).toHaveCount(3)
        for(let i = 0; i < await courses.count(); i++){
            const course = courses.nth(i)
            const courseimg = course.locator('img')
            await expect(courseimg).toBeVisible()
            const courseName = course.locator('h3')
            await expect(courseName).toBeVisible()
            const techglobalTag = course.locator('.my-3')
            await expect(techglobalTag).toBeVisible()
            const price = course.locator('full-price')
            expect(price).toBeTruthy()
        }
        const discount = page.locator('[data-testid="discount"]')
        await expect(discount).toHaveCount(2)
        for (let i = 0; i < await courses.count(); i++) {
            const addToCartBtn = courses.nth(i).locator('button')
            await expect(addToCartBtn).toBeVisible()
            await expect(addToCartBtn).toBeEnabled()
            await expect(addToCartBtn).toHaveText('Add to Cart')
          }
    })
    test('Test Case 02 - Cart Section Validation', async({page}) => {
        const cartItemsHeading = page.getByText('Items Added to Cart')
        await expect(cartItemsHeading).toBeVisible()
        const totalPriceID = page.locator('#total-price').filter({ hasText: 'Total: $0' })
        await expect(totalPriceID).toBeVisible()
        const placeOrderBtn = page.getByRole('button', {name: 'Place Order'})
        await expect(placeOrderBtn).toBeVisible()
        await expect(placeOrderBtn).toBeDisabled()
        await expect(placeOrderBtn).toHaveText('Place Order')
    })
    test('Test Case 03 - Add a Course to the Cart and Validate', async({page}) => {
        const cypresscrouseAddBtn = page.locator('#course-3 div>button')
        await cypresscrouseAddBtn.click()
        const totalPrice = page.locator('#total-price').filter({ hasText: 'Total: $10' })
        await expect(totalPrice).toContainText('10')
        const cartAddeditem = page.locator('div[class ^="course-card Project"]')
        await expect(cartAddeditem).toHaveCount(1)
        const courseItme = cartAddeditem.nth(0)
        const courseImg = courseItme.locator('img')
        await expect(courseImg).toBeVisible()
        const courseName = courseItme.getByText('Cypress Automation Course')
        await expect(courseName).toBeVisible()
        const placeOrderBtn = page.getByRole('button', {name: 'Place Order'})
        await placeOrderBtn.click()
        const successMsg = page.getByText('Your order has been placed.')
        await expect(successMsg).toBeVisible()
    })
    
})