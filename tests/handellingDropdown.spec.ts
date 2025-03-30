import {test} from '@playwright/test'
test('Handelling DropDown',async({page})=>{
    await page.goto('https://www.facebook.com/signup');

    //select date 
    await page.locator('span > #day').selectOption('12');
    await page.locator('span > #month').selectOption('Sep');
    await page.locator('span > #year').selectOption('1999');

    //click on gender
    await page.locator('span[data-name="gender_wrapper"]').getByText('Male',{ exact: true }).click();

    

    

})