describe('Login Test Scenarios', ()=>{
    it('should login with valid credentials', async () => {
        await browser.url('https://www.saucedemo.com/')

        await $('#user-name').setValue('standard_user')
        await $('#password').setValue('secret_sauce')
        await $('#login-button').click()

        await expect($('.title')).toBeExisting()
        await expect($('.title')).toHaveTextContaining('test')
    })
})