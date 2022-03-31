const { chromium } = require('playwright');
const authorization = require("./user2");

(async () => {
  const browser = await chromium.launch({
    headless: false,
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://netology.ru");
  await page.pause();
  await page.locator("text=Войти").click();
  await page.locator('[placeholder="Email"]').click();
  await page.locator('[placeholder="Email"]').fill("authorization.email");
  await page.locator('[placeholder="Email"]').press("Tab");
  await page.locator('[placeholder="Пароль"]').fill("authorization.password");
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://netology.ru/profile' }*/),
    page.locator('[data-testid="login-submit-btn"]').click(),
  ]);
  await page.locator("text=Мои курсы и Професии");
  await page.screenshot({ path: "example.png" });

  await context.close();
  await browser.close();
})();
