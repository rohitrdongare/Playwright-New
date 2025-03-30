import {test} from '@playwright/test'
test('Mouse Hover and double click',async({page})=>{
    await page.goto('https://www.google.com');
    
    //hover
    await page.getByLabel('Search by voice').hover();
    await page.screenshot({path:"screenshots/searchByVoice.png"});

    //double click
    await page.getByLabel('Search by voice').dblclick();
    await page.screenshot({path:"screenshots/doubleClick.png"});
})

test('right , left ,middle click',async({page})=>{
    await page.goto('https://www.google.com/search?q=playwright+by+testers+talk');
    await page.getByRole('link',{name:"Playwright by Testers Talk☑️"}).first().click({button:'left'});
    await page.getByRole('link',{name:"Playwright by Testers Talk☑️"}).first().click({button:'middle'}); //opens new tab
    await page.getByRole('link',{name:"Playwright by Testers Talk☑️"}).first().click({button:'right'});

})