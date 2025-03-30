import {test} from '@playwright/test'
test('KeyBoard Actions',async({page})=>{
    await page.goto('https://www.google.com/');

    await page.locator('[role="combobox"]').fill('I am Rohit');

    await page.locator('[role="combobox"]').press('Enter');
    await page.locator('[role="combobox"]').press('Control+A');
    await page.locator('[role="combobox"]').press('Delete');
    await page.waitForTimeout(5000)




    

    
    

    

})