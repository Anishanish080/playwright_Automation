import { test, expect } from '@playwright/test';

test('login and logout flow', async ({ page }) => {
  // Go to the site
  await page.goto('https://dev.carental.com/');

  // Click the user icon (open login form)
  const userIcon = page.locator('.fa-solid.fa-user').first();
  await expect(userIcon).toBeVisible();
  // Click the user icon and wait for the login page to load (URL contains /login).
  await Promise.all([
    page.waitForURL('**/login', { timeout: 15_000 }),
    userIcon.click(),
  ]);

  // wait for the login inputs to appear on the login page
  const emailField = page.getByPlaceholder('Email');
  await emailField.waitFor({ state: 'visible', timeout: 10_000 });
  await emailField.fill('testgoo@yopmail.com');

  const passwordField = page.locator('input[type="password"]');
  await passwordField.waitFor({ state: 'visible', timeout: 20_000 });
  await passwordField.fill('Test1234');

  // Click Login button on the login page
  const loginButton = page.getByRole('button', { name: /login/i });
  await expect(loginButton).toBeVisible();
  await loginButton.click();

  // Wait for the logout menu item to appear — this confirms login succeeded.
  const logoutItem = page.getByRole('listitem', { name: /log out/i });
  await expect(logoutItem).toBeVisible({ timeout: 10_000 });

  // Click logout from the menu and confirm if required
  await logoutItem.click();

  const confirmLogout = page.getByRole('button', { name: /logout/i });
  if (await confirmLogout.count() > 0) {
    await expect(confirmLogout).toBeVisible({ timeout: 5_000 });
    await confirmLogout.click();
  }

  // Verify user is logged out (e.g., login button visible again)
  await expect(page.getByRole('button', { name: /login/i })).toBeVisible({ timeout: 10_000 });
});
