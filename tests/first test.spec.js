const { test, expect } = require('@playwright/test')

test('my test',async({page})=>{
 await page.goto('https://dev.carental.com')
 //expect(page).toHaveTitle('carental')
})