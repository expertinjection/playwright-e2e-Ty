import { test, expect } from '@playwright/test';

test.describe('Playwright Actions', () => {
  test.beforeEach( async({ page }) => {
    await page.goto('https://www.techglobal-training.com');
  });

  test('Hover', async({ page }) => {
    await page.locator('#dropdown-testing').hover()
    const forntendTestingOptionVisible = await page.locator('#frontend-option').isVisible()
    await expect(page.locator('#frontend-option')).toBeVisible()
    console.log(forntendTestingOptionVisible)
  });
  test('Scroll', async({ page }) => {
    await page.locator('footer').scrollIntoViewIfNeeded()
    console.log(await page.locator('footer').isVisible())
  });
});