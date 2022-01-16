describe('mocha js demo - main suite', () => {
    before(async () => {
        console.log('Hola soy un BEFORE HOOK')
    })
    beforeEach(async () =>{
        console.log('Hola soy un BEFORE EACH HOOK')
    })
    it.skip('Soy el primer test utilizando IT', async () =>{
        console.log('Primer Test')
    })
    it('Soy el segundo test utilizando IT', async () =>{
        console.log('Segundo Test')
        
    })
    afterEach(async () =>{
        console.log('Hola soy un AFTER EACH HOOK')
    })
    after(async ()=>{
        console.log('Hola soy un AFTER HOOK')
    })
})