describe('I am a describe', () => {
    before(async () => {
        console.log('I am a BEFORE')
    })
    beforeEach(() => {
        console.log('I am a BEFORE EACH')
    })
    it.only('I am a IT', async () => {
        console.log('I am a IT')
    })
    it('I am another IT', async () => {
        console.log('I am another IT')
    })
    afterEach(async () => {
        console.log('I am a AFTER EACH')
    })

    after(async () => {
        console.log('I am a AFTER')
        await browser.debug()
    })

})
