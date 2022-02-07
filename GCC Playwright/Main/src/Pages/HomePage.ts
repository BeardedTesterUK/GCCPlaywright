import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage {

    readonly payItLink: Locator;

    constructor(page){
        super(page);
        
        this.payItLink = page.locator("a[href='https://www.glasgow.gov.uk/index.aspx?articleid=25794']");
    }

    async openPayPage() {
        await this.payItLink.click();
        await expect(this.page).toHaveTitle('Pay It - Glasgow City Council');
    }
}