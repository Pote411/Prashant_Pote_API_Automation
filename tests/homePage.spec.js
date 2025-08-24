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
