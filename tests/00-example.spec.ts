import { test, expect } from '@playwright/test';
import { it } from 'node:test';
test.describe('Demo @Smoke', () => {
  test.beforeEach(async({page}) => {
    await page.goto('https://playwright.dev/')
  })
  test('has title', async ({ page }) => {
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
  });
  
  test('get started link', async ({ page }) => {
    // Click the get started link.
    await page.getByRole('link', { name: 'Get started' }).click();
    // Expects page to have a heading with the name of Installation.
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  });
})



    

  test('has title', async ({ page }) => {
    await page.goto('https://www.wikipedia.org/')
    await page.fill('#searchInput', 'Playwright')
    await page.press('#searchInput', 'Enter')
    await expect(page).toHaveURL(/Playwright/)
    await expect(page).toHaveTitle(/Playwright/)
    const main_heading = page.locator('#firstHeading')
    await expect(main_heading).toHaveText('Playwright')

  });
