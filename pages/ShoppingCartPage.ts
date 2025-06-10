import { expect, Locator, Page } from '@playwright/test'

export class ShoppingCartPage {
  readonly page: Page
  readonly heading: Locator
  readonly courses: Locator
  readonly sdetCoure: Locator
  readonly playwrightCourse: Locator
  readonly cypressCourse: Locator
  readonly discountTags: Locator
  readonly totalPrice: Locator
  readonly placeOrderButton: Locator
  readonly successMessage: Locator
  readonly cartItemsSection: Locator
  readonly FinalPriceLocator: Locator
  readonly CourseDiscountLocator: Locator
  readonly CourseAddButton: Locator
  readonly coursesImgs: Locator
  readonly coursesName: Locator
  readonly coursesPrices: Locator


  constructor(page: Page) {
    this.page = page
    this.heading = page.getByRole('heading', { name: 'Available Courses' })
    this.courses = page.locator('div[class^="Project8_course"]')
    this.sdetCoure = page.locator('#course-1')
    this.playwrightCourse = page.locator('#course-2')
    this.cypressCourse = page.locator('#course-3')
    this.discountTags = page.locator('[data-testid="discount"]')
    this.totalPrice = page.locator('#total-price')
    this.placeOrderButton = page.getByRole('button', { name: 'Place Order' })
    this.successMessage = page.locator('.notification')
    this.cartItemsSection = page.getByText('Items Added to Cart')
    this.FinalPriceLocator = page.locator('span[data-testid="final-price"]')
    this.CourseAddButton = page.getByRole('button', { name: 'Add to Cart' })
    this.coursesImgs = page.locator('div[class^="Project8_course"] img')
    this.coursesName = page.locator(('div[class^="Project8_course"] h3'))
    this.coursesPrices = page.locator('div[class^="Project8_course"] [data-testid="price"]')
  }

  async addCourseToCart(courseID: string) {

    const course = this.page.locator(`#${courseID}`)
    const addButton = course.getByRole('button', { name: 'Add to Cart' })
    await addButton.click()
  }

  async placeOrder() {
    await this.placeOrderButton.click()
  } 

}