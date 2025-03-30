import {test} from '@playwright/test'
test('Handelling Iframes',async({page})=>{
    await page.goto('https://jqueryui.com/droppable/');

    const iframe=page.frameLocator('.demo-frame');
    const draggable=iframe.locator('#draggable');
    const droppable=iframe.locator('#droppable');

    //drag and drop
    await draggable.dragTo(droppable);
    

    
    

    

})