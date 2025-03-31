import {Page, Locator} from "@playwright/test"
export class Google {
    readonly page:Page;
    readonly searchBox:Locator

    constructor(page:Page){
        this.page=page;
        this.searchBox=page.locator('[role="combobox"]')
    }
    
    async navigateTo(){
        await this.page.goto('https://www.google.com/')
    }

    async searchInSearchBox(){
        await this.searchBox.fill('I am Rohit');
        await this.searchBox.press('Enter')
    }
     

}