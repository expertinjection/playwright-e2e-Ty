import { test, expect } from "@playwright/test";
import { ShoppingCartPage } from "../../pages/ShoppingCartPage";

test.describe("Project02 Playwright", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://techglobal-training.com/frontend/shopping-cart");
  });

  test("Test Case 01 - Available Courses Section Validation", async ({
    page,
  }) => {
    const shoppingCartPage = new ShoppingCartPage(page)
    await expect(shoppingCartPage.heading).toBeVisible()

    await expect(shoppingCartPage.courses).toHaveCount(3)
    const images = shoppingCartPage.coursesImgs
    for(let i = 0; i < await images.count(); i++){
        const img = images.nth(i)
    
        await expect(img).toBeVisible()
    }
    const names = shoppingCartPage.coursesName
    for(let i = 0; i < await names.count(); i++){
        const name = names.nth(i)
    
        await expect(name).toBeVisible()
    }
    const prices = shoppingCartPage.coursesPrices
    for(let i = 0; i < await prices.count(); i++){
        const price = prices.nth(i)
    
        await expect(price).toBeVisible()
        expect(price).toBeTruthy()
    }
    const discount = shoppingCartPage.discountTags
    await expect(discount).toHaveCount(2);

  });

  test("Test Case 02 - Cart Section Validation", async ({ page }) => {
    const shoppingCartPage = new ShoppingCartPage(page)
    await expect(shoppingCartPage.cartItemsSection).toBeVisible();
    await expect(shoppingCartPage.totalPrice).toHaveText('Total: $0')
    const placeOrderButton = shoppingCartPage.placeOrderButton
    await expect(placeOrderButton).toBeVisible();
    await expect(placeOrderButton).toBeDisabled();
    await expect(placeOrderButton).toHaveText("Place Order");
  });

  test('Test Case 03 - Add a Course to the Cart and Validate', async ({page}) => {
    const shoppingCartPage = new ShoppingCartPage(page)
    await shoppingCartPage.addCourseToCart('course-3')
    await expect(shoppingCartPage.totalPrice).toHaveText('Total: $10')
    await expect(shoppingCartPage.cypressCourse).toBeVisible()
    await shoppingCartPage.placeOrder()
    await expect(shoppingCartPage.successMessage).toBeVisible()
    await expect(shoppingCartPage.totalPrice).toHaveText('Total: $0')
  })
  test('Test Case 04 - Add Two Courses to the Cart and Validate', async ({page}) => {
    const shoppingCartPage = new ShoppingCartPage(page)
    await shoppingCartPage.addCourseToCart('course-1')
    await shoppingCartPage.addCourseToCart('course-2')
    await expect(shoppingCartPage.totalPrice).toHaveText('Total: $152')
    await expect(shoppingCartPage.sdetCoure).toBeVisible()
    await expect(shoppingCartPage.playwrightCourse).toBeVisible()
    await shoppingCartPage.placeOrder()
    await expect(shoppingCartPage.successMessage).toBeVisible()
    await expect(shoppingCartPage.totalPrice).toHaveText('Total: $0')
  })

  test('Test Case 05 - Add All Three Courses to the Cart and Validate', async ({page}) => {
    const shoppingCartPage = new ShoppingCartPage(page)
    await shoppingCartPage.addCourseToCart('course-1')
    await shoppingCartPage.addCourseToCart('course-2')
    await shoppingCartPage.addCourseToCart('course-3')
    await expect(shoppingCartPage.totalPrice).toHaveText('Total: $162')
    await expect(shoppingCartPage.sdetCoure).toBeVisible()
    await expect(shoppingCartPage.playwrightCourse).toBeVisible()
    await expect(shoppingCartPage.cypressCourse).toBeVisible()
    await shoppingCartPage.placeOrder()
    await expect(shoppingCartPage.successMessage).toBeVisible()
    await expect(shoppingCartPage.totalPrice).toHaveText('Total: $0')
  })
});

