import { test, expect } from "@playwright/test";

test("create delete course list", async ({ page }) => {
  await page.goto("/");
  await page.getByPlaceholder("название").click();
  await page.getByPlaceholder("название").fill("Karas");
  await page.getByPlaceholder("описание").click();
  await page.getByPlaceholder("описание").fill("Losos");
  await page.getByRole("button", { name: "Добавить" }).click();
  await expect(page.getByText("KarasLososУдалить")).toBeVisible();
  await page
    .locator("div")
    .filter({ hasText: /^KarasLososУдалить$/ })
    .getByRole("button")
    .click();
  await expect(page.getByText("KarasLososУдалить")).not.toBeVisible();
});
