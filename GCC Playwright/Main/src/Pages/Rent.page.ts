import { expect, Locator } from "@playwright/test"
import { BasePage } from "./BasePage"

export class Rent extends BasePage {

    readonly refNumberField: Locator;
    readonly nameField: Locator;
    readonly addressField: Locator;
    readonly postcodeField: Locator;
    readonly poundsField: Locator;
    readonly penceField: Locator;
    readonly continueButton: Locator;
    readonly referenceNumberError: Locator;

    constructor(page){
        super(page);

        this.refNumberField = page.locator('id=FT_136');
        this.nameField = page.locator('id=FT_137');
        this.addressField = page.locator('id=FT_138');
        this.postcodeField = page.locator('id=PCI_24');
        this.poundsField = page.locator('id=ATI_23');
        this.penceField = page.locator('id=ATIPence_23');
        this.continueButton = page.locator('id=continue');
        this.referenceNumberError = page.locator("div[class='aip_error_style aip_common_control_style'] label[for='FT_136']");

    }

    async completePaymentForm(ref: string, name: string, address: string, postcode: string, pounds: string, pence: string){
        await this.refNumberField.fill(ref);
        await this.nameField.fill(name);
        await this.addressField.fill(address);
        await this.postcodeField.fill(postcode);
        await this.poundsField.fill(pounds);
        await this.penceField.fill(pence);
        await this.page.screenshot({ path: 'Main/Resources/Screenshots/payment.png', fullPage: true });
    }

    async confirmErrorMesages(error: string){
        await this.continueButton.click();
        await expect(this.referenceNumberError).toHaveText(error);
        await this.page.screenshot({ path: 'Main/Resources/Screenshots/errors.png', fullPage: true });
    }
    
    async confirmPayment(){
        console.log("CONTINUE PAYMENT SELECTED");
    }
}