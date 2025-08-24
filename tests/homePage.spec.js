import { test, expect } from '@playwright/test';
//const playWright= require('@playwright/test');


test('Validate the Home Page title', async ({ page }) => {
  await page.goto('https://demoblaze.com/');

  const homePageTitle= page.title();
    console.log("Home Page Title is: ", homePageTitle);
    // Expect a title "to contain" a substring.
   await expect(page).toHaveTitle('STORE');

   let pageURL=page.url();
   console.log("Home Page URL is: ", pageURL);
    await expect(page).toHaveURL('https://demoblaze.com/');

   page.close();

});