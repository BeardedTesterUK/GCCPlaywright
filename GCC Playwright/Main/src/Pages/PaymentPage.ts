import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class PaymentPage extends BasePage {

    readonly councilTaxButton: Locator;
    readonly housingBenefitPaymentButton: Locator;
    readonly rentPaymentButton: Locator;

    constructor(page){
        super(page);

        this.councilTaxButton = page.locator("//button[text()='Council Tax']");
        this.housingBenefitPaymentButton = page.locator("//button[text()='Housing Benefit Overpayment']");
        this.rentPaymentButton = page.locator("//button[text()='Homeless Temporary Accommodation']");
    }

    async selectCouncilTaxPayment(){
        await this.councilTaxButton.click();
        await expect(this.page).toHaveTitle('Glasgow City Council - Account Search');
    }

    async selectHousingBenefits(){
        await this.housingBenefitPaymentButton.click();
        await expect(this.page).toHaveTitle('Glasgow City Council - Account Search');
    }

    async selectRentPayment(){
        await this.rentPaymentButton.click();
        await expect(this.page).toHaveTitle('Glasgow City Council - Data Entry');
    }
}