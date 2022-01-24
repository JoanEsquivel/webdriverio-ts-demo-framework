import basePage from "../basePage"
import { ChainablePromiseElement } from 'webdriverio';

/**
* book store page object containing all methods, selectors and functionality
* that is shared across all page objects in this module
*/
export default class bookStoreBasePage extends basePage{
    /**
    Locator to identify username logged in
    */
    public get usernameLabel(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#userName-value');
    }

    public get logoutButton():ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('button#submit')
    }

    public async clickLogout(): Promise<void> {
        await this.logoutButton.click()
    }
}