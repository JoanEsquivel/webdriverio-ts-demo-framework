describe('Assertions - Element Matchers', () => {
    
    it('To exist', async() =>{
        await browser.url('https://demoqa.com/modal-dialogs')
        const smallModal = await $('#showSmallModal')
        smallModal.scrollIntoView()
        smallModal.click()
        const modalContainer = await $('.modal-content')
        await expect(modalContainer).toExist()
    })

    it('To not exist(workaround)', async() =>{
        await browser.url('https://demoqa.com/modal-dialogs')
        // const smallModal = await $('#showSmallModal')
        // smallModal.scrollIntoView()
        // smallModal.click()
        const doesExist = await $('.modal-content').isExisting()
        await expect(doesExist).toBe(false)

        //Review the difference with isDisplayed
        //-> https://webdriver.io/docs/api/element/isExisting/
    })
    
    it('To have attribute', async ()=>{
        await browser.url('https://demoqa.com/buttons')
        const button = await $('#doubleClickBtn')
        await expect(button).toHaveAttribute('class', 'btn btn-primary')
    })

    it('To have attribute containing', async ()=>{
        await browser.url('https://demoqa.com/buttons')
        const button = await $('#doubleClickBtn')
        await expect(button).toHaveAttributeContaining('class', 'btn-primary')
    })
    
    it('To be clickable', async ()=>{
        await browser.url('https://demoqa.com/buttons')
        const button = await $('#doubleClickBtn')
        await expect(button).toBeClickable()
    })

    it('To have href', async ()=>{
        await browser.url('https://demoqa.com/links')
        const link = await $('#simpleLink')
        await expect(link).toHaveHref('https://demoqa.com')
    })

    it('To have text', async ()=>{
        await browser.url('https://demoqa.com/links')
        const link = await $('#simpleLink')
        await expect(link).toHaveText('Home')
    })

    it('To have text', async ()=>{
        await browser.url('https://demoqa.com/links')
        const link = await $('#simpleLink')
        await expect(link).toHaveTextContaining('me')
    })

    it.only('To be elements array of size', async ()=>{
        await browser.url('https://demoqa.com/links')
        const links = await $$('a')
        await expect(links).toBeElementsArrayOfSize(13)
        await expect(links).toBeElementsArrayOfSize({ lte: 20 })
        await expect(links).toBeElementsArrayOfSize({ gte:5 })

    })
})