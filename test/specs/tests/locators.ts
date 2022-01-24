describe('Locators - Test Scenarios',async ()=>{

    beforeEach(async ()=>{
        await browser.url('https://demoqa.com/links')
        
    })
    it('CSS example', async () => {
       
        const createdLink = await $('#created')
        const linkResponse = await $('#linkResponse')

        createdLink.scrollIntoView()
        createdLink.click()
        linkResponse.scrollIntoView()
        await expect(linkResponse).toHaveTextContaining('Link has responded with staus 201 and status text Created')
        
    })

    it('CSS by index example(nth-child)', async () => {

        const unauthorizedLink = await $('div#linkWrapper p:nth-child(9) a')
        const linkResponse = await $('#linkResponse')

        unauthorizedLink.scrollIntoView()
        unauthorizedLink.click()
        linkResponse.scrollIntoView()
        await expect(linkResponse).toHaveTextContaining('Link has responded with staus 401 and status text Unauthorized')
    })

    it('Link Text(=) example', async () => {

        //To get an anchor element with a specific text in it, query the text starting with an equals (=) sign.

        const noContentLink = await $('=No Content')
        const linkResponse = await $('#linkResponse')

        noContentLink.scrollIntoView()
        noContentLink.click()
        linkResponse.scrollIntoView()
        await expect(linkResponse).toHaveTextContaining('Link has responded with staus 204 and status text No Content')
    })

    it('Partial Link Text(*=) example', async () => {

        //To find a anchor element whose visible text partially matches your search value, query it by using *= in front of the query string (e.g. *=driver).
        const badRequestLink = await $('*=Request')
        const linkResponse = await $('#linkResponse')

        badRequestLink.scrollIntoView()
        badRequestLink.click()

        linkResponse.scrollIntoView()
        await expect(linkResponse).toHaveTextContaining('Link has responded with staus 400 and status text Bad Request')
    })

    it('Element with certain text(<element>={text}) example', async () => {

        //To find a anchor element whose visible text partially matches your search value, query it by using *= in front of the query string (e.g. *=driver).
        const forbiddenLink = await $('a=Forbidden')
        const linkResponse = await $('#linkResponse')

        forbiddenLink.scrollIntoView()
        forbiddenLink.click()

        linkResponse.scrollIntoView()
        await expect(linkResponse).toHaveTextContaining('Link has responded with staus 403 and status text Forbidden')
    })

    it('Element with patial text(<element>*={text}) example', async () => {

        //To find a anchor element whose visible text partially matches your search value, query it by using *= in front of the query string (e.g. *=driver).
        const movedLink = await $('a*=Mov')
        const linkResponse = await $('#linkResponse')

        movedLink.scrollIntoView()
        movedLink.click()
        
        linkResponse.scrollIntoView()
        await expect(linkResponse).toHaveTextContaining('Link has responded with staus 301 and status text Moved Permanently')
    })

    it('Element with patial text(<element>*={text}) example', async () => {

        //To find a anchor element whose visible text partially matches your search value, query it by using *= in front of the query string (e.g. *=driver).

        const movedLink = await $('a*=Mov')
        const linkResponse = await $('#linkResponse')

        movedLink.scrollIntoView()
        movedLink.click()

        linkResponse.scrollIntoView()
        await expect(linkResponse).toHaveTextContaining('Link has responded with staus 301 and status text Moved Permanently')
    })

    it('Element with xpath example', async () => {

        //To find a anchor element whose visible text partially matches your search value, query it by using *= in front of the query string (e.g. *=driver).
        const notFoundLink = await $('//*[@id="invalid-url"]')
        const linkResponse = await $('#linkResponse')

        notFoundLink.scrollIntoView()
        notFoundLink.click()

        linkResponse.scrollIntoView()
        await expect(linkResponse).toHaveTextContaining('Link has responded with staus 404 and status text Not Found')
    })

})
