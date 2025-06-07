import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class FrontendProjectPage extends BasePage {
  readonly projectsCards: Locator;
  
  constructor(page: Page) {
    super(page);
    this.projectsCards = this.page.locator('[class^=CardGrids_projects]>div');
  }

  async clickOnProject(projectsText: string) {
    await this.projectsCards.filter({ hasText: projectsText }).click();
  }
}