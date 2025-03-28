import {test} from '@playwright/test'
test('element screenshot',async ({page})=>{
    await page.goto('https://www.youtube.com/@testerstalk');

    //Element Screenshot
    await page.locator('#page-header-banner-sizer').screenshot({path:'screenshots/elementsScreenshot.png'})

    //Page Screenshot
    await page.screenshot({path:'./screenshots/pageScreenshot.png'});

    //Full page screeenshot 
    await page.screenshot({path:'./screenshots/FullpageScreenshot.png',fullPage:true});



})