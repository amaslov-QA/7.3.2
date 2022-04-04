const { chromium } = require('playwright');
const user2 = require('./user2');
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
  await page.locator('[placeholder="Email"]').fill(user2.invalidemail);
  await page.locator('[placeholder="Email"]').press("Tab");
  await page.locator('[placeholder="Пароль"]').fill(user2.invalidpassword);
  //await Promise.all([
   // page.waitForNavigation(/*{ url: 'https://netology.ru/profile' }*/),
   // page.locator('[data-testid="login-submit-btn"]').click(),
  //]);
  await page.locator('[data-testid="login-error-hint"]')
  await page.screenshot({ path: "example.png" });

  await context.close();
  await browser.close();
})();
