import { test, expect } from "@playwright/test";

test("create delete courses list", async ({ page }) => {
  await page.locator("body").click();
  await page.goto("/");
  await page.getByPlaceholder("Имя").click();
  await page.getByPlaceholder("Имя").fill("test");
  await page.getByPlaceholder("Описание").click();
  await page.getByPlaceholder("Описание").fill("test desc");
  await page.getByRole("button", { name: "Добавить" }).click();
  await expect(page.getByText("testtest desc")).toBeVisible();

  await page.getByRole("button", { name: "Удалить" }).click();
  await expect(page.getByText("testtest desc")).not.toBeVisible();
});
