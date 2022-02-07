// example.spec.ts
// const { chromium } = require('playwright');
// import { test, expect } from '@playwright/test';

// test.describe('feature GCC', () => {

//     let browser = null;
//     let page = null;
//     let context = null;

//   test.beforeEach(async () => {
//     // Go to the starting url before each test.
//         browser = await chromium.launch();
//         context = await browser.newContext();
//         page = await context.newPage();
//         await page.goto('https://www.glasgow.gov.uk/');
//         await expect(page).toHaveTitle('Homepage of Glasgow City Council - Glasgow City Council');

//   });

//   test.afterEach(async () =>{
//       await context.close();
//         await browser.close();
//   })
// });