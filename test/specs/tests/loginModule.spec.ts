import loginPage from '../../../pageObjects/bookStore/LoginPage'


describe('Login Module Test Suite', () => {
    beforeEach(async () => {
        loginPage.open()
    })

    it('should login', async() =>{
        loginPage.login('joanmedia', 'Test1234*')
        await expect(loginPage.usernameLabel).toHaveTextContaining('joanmedia')
        loginPage.open()
        loginPage.clickLogout()
        await expect(loginPage.usernameLabel).not.toBeExisting()
    })

    it('should not login', async() =>{
        loginPage.login('joanmedia', 'Test1234**')
        await expect(loginPage.usernameLabel).not.toBeDisplayed()
    })
})