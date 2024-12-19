require('cypress-xpath');
describe('XPathLocator',()=> {
    it('xpathlocator',() => {
        cy.visit("https://staging.divii.ca")
        cy.xpath("//img[@alt='divii logo']")
    })
})
