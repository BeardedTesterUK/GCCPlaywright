import { expect, Locator, Page } from "@playwright/test";

export class BasePage {

    readonly page: Page;
    readonly homeButton: Locator;

    constructor(page){
        this.page = page;

        this.homeButton = page.locator("id=gccLogoTop");
    }
    async clickReturnHomeButton(){
        await this.homeButton.click();
        await expect(this.page).toHaveTitle('Homepage of Glasgow City Council - Glasgow City Council');
    }
}