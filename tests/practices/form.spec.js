import {test,expect}from '@playwright/test';
test('example',async ({page}) => {
await page.goto('https://testautomationpractice.blogspot.com/')
await page.getByRole('textbox', { name: 'Enter Name' }).fill('anish')
await page.getByRole('textbox', { name: 'Enter EMail' }).fill('test12@yopmail.com')
await page.getByRole('textbox', { name: 'Enter Phone' }).fill('9876543210')
await page.getByRole('textbox', { name: 'Address:' }).fill('test addess')
await page .getByRole('radio', { name: 'Male', exact: true }).click()
await page.getByRole('checkbox', { name: 'Monday' }).click()
await page .getByLabel('Country:').selectOption('India')
await page.getByLabel('Colors:').selectOption('red')
await page.getByLabel('Sorted List:').selectOption('cheetah')
await page .locator('#datepicker').click()
await page.getByRole('link', { name: '25' }).click()
await page.locator('#txtDate').click()
await page.getByRole('link', { name: '28' }).click()
await page.getByPlaceholder('Start Date').fill('2025-11-01')
  await page.getByPlaceholder('End Date').fill('2025-11-30')
await page.locator('#post-body-1307673142697428135').getByRole('button', { name: 'Submit' }).click()
//await page.pause()
await page.locator('#singleFileInput').click();
  await page.locator('#singleFileInput').setInputFiles('Brochures (1).pdf')
  await page.locator('#multipleFilesInput').click();
  await page.locator('#multipleFilesInput').setInputFiles(['Brochures (1).pdf', 'dummy-pdf_2 (1).pdf']);
await page.pause()


});