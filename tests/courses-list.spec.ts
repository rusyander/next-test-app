import { test, expect } from "@playwright/test";
test.describe("courses-list", () => {
  test("create delete courses list", async ({ page }) => {
    await page.locator("body").click();
    await page.goto("/");
    await page.getByPlaceholder("Имя").click();
    await page.getByPlaceholder("Имя").fill("Test course");
    await page.getByPlaceholder("Описание").click();
    await page.getByPlaceholder("Описание").fill("Test description");
    await page.getByRole("button", { name: "Добавить" }).click();
    await expect(
      page.getByText("Test courseTest descriptionУдалить"),
    ).toBeVisible();

    await page.getByRole("button", { name: "Удалить" }).click();

    await expect(
      page.getByText("Test courseTest descriptionУдалить"),
    ).not.toBeVisible();
  });
});
