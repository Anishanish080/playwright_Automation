import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://test.v-tutor.com.au/');
  await page.getByRole('button', { name: 'Be a V-Tutor' }).click();
  await page.getByRole('link', { name: 'Apply Now' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('Anish-tester');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Tutor');
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('test13@yopmail.com');
  await page.getByPlaceholder('Password', { exact: true }).click();
  await page.getByPlaceholder('Password', { exact: true }).fill('Test@123');
  await page.getByPlaceholder('Confirm Password').click();
  await page.getByRole('textbox', { name: 'This field is required' }).fill('Test@123');
  await page.getByText('Sign me up for regular').click();
  await page.getByRole('button', { name: 'Sign me up' }).click();
});