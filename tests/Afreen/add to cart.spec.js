import { test, expect } from '@playwright/test';

test('add to cart flow', async ({ page }) => {
    await page.goto('https://afreen-test.itrobes.in/')

    await page.getByRole('button').nth(2).click()
    await page.getByRole('textbox', { name: 'Email *' }).fill('anish23@yopmail.com')
    await page.getByRole('textbox', { name: 'Password *' }).fill('Test123')
    await page.getByRole('button', { name: 'SIGN IN SIGN IN' }).click()
    //await page.pause()
    await page.getByRole('textbox').click();
    await page.getByRole('textbox').fill('test')
    await page.getByRole('link', { name: 'product 1 SoftTech FRP Series' }).click();
    await page.getByRole('button', { name: 'ADD TO CART ADD TO CART' }).click();
    await page.getByTitle('Brown').click();
    await page.getByRole('button', { name: 'GET INQUIRY GET INQUIRY' }).click();
    await page.getByRole('button').filter({ hasText: /^$/ }).nth(3).click();
    await page.pause()
});
