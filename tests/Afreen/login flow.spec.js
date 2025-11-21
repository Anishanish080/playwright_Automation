import { test, expect } from '@playwright/test';

test('login flow', async ({ page }) => {
    //go to the site
    await page.goto('https://afreen-test.itrobes.in/')
    await page.pause()
    await page.getByRole('button').nth(2).click()
    await page.getByRole('textbox', { name: 'Email *' }).fill('anish23@yopmail.com')
    await page.getByRole('textbox', { name: 'Password *' }).fill('Test123')
    await page.getByRole('button', { name: 'SIGN IN SIGN IN' }).click()


})