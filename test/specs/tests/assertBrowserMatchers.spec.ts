describe('Assertions - Browser Matchers', () => {
    
    

    beforeEach(async () => {
        await browser.url('https://demoqa.com/')
    })

    it('To Have Url', async() =>{
        await expect(browser).toHaveUrl('https://demoqa.com/')
    })

    it('To Have Url Containing', async() =>{
        await expect(browser).toHaveUrlContaining('demoqa.com')
    })

    it('To Have Title', async() =>{
        await expect(browser).toHaveTitle('ToolsQA')
    })

    it('To Have Title Containing', async() =>{
        await expect(browser).toHaveTitleContaining('qa',{ignoreCase:true})
    })
})