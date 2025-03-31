import { Page } from '@playwright/test';
import { Google } from '../pages/google';

export class PageObjectManager{
    readonly page:Page;
    readonly google:Google
    constructor(page:Page){
        this.page=page
        this.google=new Google(this.page)

    }

    async googleSearch(){
        return this.google
    }


}
