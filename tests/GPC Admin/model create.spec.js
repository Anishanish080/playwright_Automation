import { test, expect } from '@playwright/test';
test.only('model create flow', async ({ page }) => {

    await page.goto('https://gpcadmin-test.itrobes.in/')
    //await page.pause()
    await page.getByRole('textbox', { name: '* Username' }).fill('support@itrobes.com')
    await page.getByRole('textbox', { name: '* Password' }).fill('gpcdemo@2025')
    await page.getByRole('button', { name: 'Login' }).click()
    await page.getByRole('link', { name: 'Model' }).click()
    await page.getByRole('button', { name: '+ Add Model' }).click();
    //await page.pause()
    await page.locator('.ant-select-selection-overflow').first().click()
    // await page.locator('.ant-select-tree-list-scrollbar-thumb').click();
     await page.locator('.ant-select-tree-list-scrollbar-thumb').click();
    await page.getByRole('checkbox', { name: 'Select MAR - NOZZLE' }).click();
    // await page.locator('.ant-col.ant-col-24 > .ant-form-item > .ant-row > .ant-col.ant-form-item-label > label > .flex').click();
    await page.locator('.ant-select-selection-wrap > .ant-select-selection-search').click();
    await page.getByText('TPLWS').click();
    await page.getByRole('textbox', { name: '* Model Number' }).fill('ME-93833');
    await page.getByRole('button', { name: 'Create' }).click()

    //await page.locator('.ant-col.ant-col-24 > .ant-form-item > .ant-row > .ant-col.ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-wrap > .ant-select-selection-overflow').click();
    //await page.locator('.ant-select.ant-select-outlined.ant-select-in-form-item.min-h-\\[30px\\].border-0.css-dev-only-do-not-override-qj2fem.ant-select-focused > .ant-select-selector > .ant-select-selection-wrap > .ant-select-selection-overflow').click();
    //await page.locator('div').filter({ hasText: 'No data' }).nth(5).click();

    await page.pause()
})