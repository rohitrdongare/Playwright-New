import {test} from '@playwright/test';
import {Google} from '../pages/google'
import { PageObjectManager } from '../pageObjectManager/POM';




test('search in google using page', async({page})=>{
const google=new Google(page);
await google.navigateTo();
await google.searchInSearchBox();

});


test('search in google using page object manager',async({page})=>{
    const pageManager=new PageObjectManager(page);
    await (await pageManager.googleSearch()).navigateTo()
    await (await pageManager.googleSearch()).searchInSearchBox()
    

})