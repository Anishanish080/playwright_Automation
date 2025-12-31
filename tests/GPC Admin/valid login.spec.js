import { test, expect } from '@playwright/test';

test('valid login flow', async ({ page }) => {
    //goto the site
    await page.goto('https://gpcadmin-test.itrobes.in/')
    await page.getByRole('textbox', { name: '* Username' }).fill('support@itrobes.com')
    await page.getByRole('textbox', { name: '* Password' }).fill('gpcdemo@2025')
    await page.getByRole('button', { name: 'Login' }).click()
    await page.getByRole('menuitem', { name: 'appstore-add Inventory' }).click()
    await page.getByRole('link', { name: 'Categories' }).click()
    await page.getByRole('button', { name: '+ Add Category' }).click()
    await page.getByRole('textbox', { name: '* Category Name' }).fill('UEYUYQ')
    await page.pause()
    await page.getByRole('checkbox', { name: 'Is Sub Category' }).check()
    await page.getByRole('combobox', { name: 'Main Category' }).click()
    //await page.pause()
    await page.getByText('Atlas').click()
    await page.getByRole('textbox', { name: '* Description' }).fill("ttest data ")
    await page.locator('div').filter({ hasText: /^Drop your image here or click to browse$/ }).nth(5).click();
    await page.locator('body').setInputFiles('image 40.png');
    await page.getByRole('button', { name: 'Submit' }).click()


    await page.pause()


})
