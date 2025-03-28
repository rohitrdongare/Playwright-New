import {test} from '@playwright/test'

test('get by Alt text , testId',async ({page})=>{
    await page.goto('https://github.com/rohitrdongare');

    ///alt text
    await page.getByAltText('ffff').click();    
    await page.getByTestId('repositories').first().click();
    

})