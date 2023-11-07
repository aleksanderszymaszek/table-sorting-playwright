// @ts-check
const { test, expect } = require('@playwright/test');
const { getSimpleTableData } = require("../utils/tableHelpers");


test("Print out the table data", async ({ page }) => {
  // Go to your specific page that contains the table
  await page.goto("", {waitUntil: 'load'});
  /// handling popups by click so they wont mess up ideally should be dismiss via API abort
  await page.getByText("Maybe later").click();
  await page.getByRole("button", { name: "Reject All" }).click();
  await expect(page.getByText("Today's Cryptocurrency Prices by Market Cap")).toBeVisible();
  /// easier to debug with 20 items
  await page.getByText("100").nth(2).click();
  const responsePromiseWithPredicate = page.waitForResponse(
    (response) =>
      response.url().includes("api.coinmarketcap.com") &&
      response.status() === 200
  );
  await page.getByRole("button", { name: "20" }).click();
  await responsePromiseWithPredicate;
  await page.keyboard.press("PageDown")

  // Call the function to get the table data
  const data = await getSimpleTableData(page);

  // Output the data to the console
  console.log(data);
});