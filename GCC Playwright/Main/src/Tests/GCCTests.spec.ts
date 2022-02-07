import { test, expect } from '@playwright/test';
import { CouncilTaxPage } from '../Pages/CouncilTaxPage'; 
import { HomePage } from '../Pages/HomePage';
import { HousingBenefit } from '../Pages/HousingBenefit.page';
import { PaymentPage } from '../Pages/PaymentPage';
import { Rent } from '../Pages/Rent.page';

const { chromium } = require('playwright');

test.describe('feature GCC', () => {

  const URL = 'https://www.glasgow.gov.uk/';
  const councilTaxButton = "//button[text()='Council Tax']";
  const refField = '#FT_183';

  // test.beforeAll(async () => {
  //       //Go to the starting url before each test.
  //           console.log("STARTING UP BEFORE EACH");
  //           await homepage.navigate();
  //      // await expect(page).toHaveTitle('Homepage of Glasgow City Council - Glasgow City Council');
  // });

  test.beforeEach(async ({ page }) =>{
      await page.goto('https://www.glasgow.gov.uk/');
      await expect(page).toHaveTitle('Homepage of Glasgow City Council - Glasgow City Council');
  });

  test.afterEach(async ({ page }) => {
    console.log("STARTING UP AFTER EACH")
    await page.close();
  });

  test('payACouncilTaxBill', async ({page}) => {
    const home = new HomePage(page);
    await home.openPayPage();
    const payment = new PaymentPage(page);
    await payment.selectCouncilTaxPayment();
    const councilTax = new CouncilTaxPage(page);
    await councilTax.makePayment("12345");
  });

  test('payHousingBenefitBill', async ({ page }) =>{
    const home = new HomePage(page);
    await home.openPayPage();
    const payment = new PaymentPage(page);
    await payment.selectHousingBenefits();
    const housing = new HousingBenefit(page);
    await housing.completePaymentForm("56789");
    await housing.clickReturnHomeButton();
  });

  test('payRentBill', async ({ page }) =>{
    const home = new HomePage(page);
    await home.openPayPage();
    const payment = new PaymentPage(page);
    await payment.selectRentPayment();
    const rent = new Rent(page);
    await rent.completePaymentForm("12345678",
                    "John Smith",
                  "1 Address Street",
                    "AB1 2CD",
                    "10",
                    "50");
    await rent.confirmPayment();
    await rent.clickReturnHomeButton();
  });

  test('errorMessageValidation', async ({ page }) =>{
    const home = new HomePage(page);
    await home.openPayPage();
    const payment = new PaymentPage(page);
    await payment.selectRentPayment();
    const rent = new Rent(page);
    await rent.confirmErrorMesages("Please enter a valid reference number");
  });
});