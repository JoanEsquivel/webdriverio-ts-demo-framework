describe('Locators - Test Scenarios',async ()=>{
    it('CSS example', async () => {
        await browser.url('https://demoqa.com/links')

        const createdLink = await $('#created')

        await createdLink.click()

        await expect($('#linkResponse')).toHaveTextContaining('Link has responded with staus 201 and status text Created')
        

    })

    it('CSS by index example(nth-child)', async () => {
        await browser.url('https://demoqa.com/links')

        const unauthorizedLink = await $('div#linkWrapper p:nth-child(9) a')

        await unauthorizedLink.click()

        await expect($('#linkResponse')).toHaveTextContaining('Link has responded with staus 401 and status text Unauthorized')
    })

    it('Link Text(=) example', async () => {

        //To get an anchor element with a specific text in it, query the text starting with an equals (=) sign.
        await browser.url('https://demoqa.com/links')

        const noContentLink = await $('=No Content')

        await noContentLink.click()

        await expect($('#linkResponse')).toHaveTextContaining('Link has responded with staus 204 and status text No Content')
    })

    it('Partial Link Text(*=) example', async () => {

        //To find a anchor element whose visible text partially matches your search value, query it by using *= in front of the query string (e.g. *=driver).

        await browser.url('https://demoqa.com/links')

        const badRequestLink = await $('*=Request')

        await badRequestLink.click()

        await expect($('#linkResponse')).toHaveTextContaining('Link has responded with staus 400 and status text Bad Request')
    })

    it('Element with certain text(<element>={text}) example', async () => {

        //To find a anchor element whose visible text partially matches your search value, query it by using *= in front of the query string (e.g. *=driver).

        await browser.url('https://demoqa.com/links')

        const forbiddenLink = await $('a=Forbidden')

        await forbiddenLink.click()

        await expect($('#linkResponse')).toHaveTextContaining('Link has responded with staus 403 and status text Forbidden')
    })

    it('Element with patial text(<element>*={text}) example', async () => {

        //To find a anchor element whose visible text partially matches your search value, query it by using *= in front of the query string (e.g. *=driver).

        await browser.url('https://demoqa.com/links')

        const movedLink = await $('a*=Mov')

        await movedLink.click()

        await expect($('#linkResponse')).toHaveTextContaining('Link has responded with staus 301 and status text Moved Permanently')
    })

    it('Element with patial text(<element>*={text}) example', async () => {

        //To find a anchor element whose visible text partially matches your search value, query it by using *= in front of the query string (e.g. *=driver).

        await browser.url('https://demoqa.com/links')

        const movedLink = await $('a*=Mov')

        await movedLink.click()

        await expect($('#linkResponse')).toHaveTextContaining('Link has responded with staus 301 and status text Moved Permanently')
    })

    it('Element with xpath example', async () => {

        //To find a anchor element whose visible text partially matches your search value, query it by using *= in front of the query string (e.g. *=driver).

        await browser.url('https://demoqa.com/links')

        const notFoundLink = await $('//*[@id="invalid-url"]')

        await notFoundLink.click()

        await expect($('#linkResponse')).toHaveTextContaining('Link has responded with staus 404 and status text Not Found')
    })

})
