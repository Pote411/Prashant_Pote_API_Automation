import { test, expect } from "@playwright/test"; // Import Playwright's test and expect functions

// Define a test case named 'Validate the Home Page title'
test("Validate the Home Page title", async ({ page }) => {
  // Navigate to the Demoblaze home page
  await page.goto("https://demoblaze.com/");
  // Get the page title (returns a Promise)
  const homePageTitle = page.title();
  // Print the page title to the console
  console.log("Home Page Title is: ", homePageTitle);

  // Assert that the page title is exactly 'STORE'
  await expect(page).toHaveTitle("STORE");
  // Get the current page URL (returns a Promise)
  const pageURL = page.url();
  // Print the page URL to the console
  console.log("Home Page URL is: ", pageURL);

  // Assert that the page URL is exactly 'https://demoblaze.com/'
  await expect(page).toHaveURL("https://demoblaze.com/");

  page.close(); // Close the browser page
});

// Define a test case named 'Validate the Home Page title'
test("Validate the user is able ti Login by Valid Credential", async ({
  page,
}) => {
  await page.goto("https://www.demoblaze.com/");

  // Click on Login button — property
  await page.click("id=login2");

  // Provide username — CSS
  await page.fill("#loginusername", "pavanol");
  // await page.fill('#loginusername', 'pavanol')

  // Provide password — CSS
  await page.fill("input[id=loginpassword]", "test@123");

  // Click on Login button — XPath
  await page.locator("//button[@onclick='logIn()']").click();

  // Locate logout link — XPath
  const logoutLink = await page.locator("*[@id='logout2']");

  // // Verify logout link presence — XPath
  // await expect().locator("//*[@id='logout2']").isVisible();

  await page.close();
});
