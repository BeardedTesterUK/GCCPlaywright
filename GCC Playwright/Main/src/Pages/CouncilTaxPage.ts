import { Locator } from "@playwright/test";
import { BasePage } from "./BasePage";


export class CouncilTaxPage extends BasePage {
    
    readonly councilTaxButton: Locator;
    readonly refField: Locator;

    constructor(page){
        super(page);

        this.councilTaxButton = page.locator("//button[text()='Council Tax']");
        this.refField = page.locator('#FT_183');
    }

    async makePayment(ref: string){
        await this.refField.fill(ref);
        console.log("PAYMENT MADE");
    }
}