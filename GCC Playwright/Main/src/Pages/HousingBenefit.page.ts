import { Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class HousingBenefit extends BasePage {

    readonly refField: Locator;


    constructor(page){
        super(page);

        this.refField = page.locator('#FT_166');
    }

    async completePaymentForm(ref: string) {
        await this.refField.fill(ref);
        console.log("PAYMENT MADE");
    }
}