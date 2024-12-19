describe('CssSelectors', () => {
    it('cssSelectors', () => {
        cy.visit("https://staging.divii.ca")
        cy.get("img[src='/img/Divii-Lawyers-Primary.29b584c3.png']")
        cy.get("button[type='button']").click()
        //cy.get(".lighter").contains("T-shirts")
    })
})