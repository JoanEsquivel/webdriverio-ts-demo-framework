
import { ChainablePromiseElement } from 'webdriverio';

import bookStoreBasePage from '../bookStore/bookStoreBasePage';

/**
 * sub page containing specific selectors and methods for a specific page
 */

class LoginPage extends bookStoreBasePage{
    public get inputUsername(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#userName');
    }

    public get inputPassword(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#password');
    }

    public get btnLogin(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#login');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
     public async login (username: string, password: string): Promise<void> {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
     public async open(): Promise<string> {
        return super.open('login');
    }
}

export default new LoginPage();