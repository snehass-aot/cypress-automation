

describe('My First Test', ()  => {
    it('test1', () =>  {
        cy.visit("https://staging.divii.ca")

        cy.title().should('eq',"Divii")
    })

    it('test2', () =>  {
        cy.visit("https://opensource-demo.orangehrmlive.com/")

        cy.title().should('eq',"OrangeHRM")
    })

})