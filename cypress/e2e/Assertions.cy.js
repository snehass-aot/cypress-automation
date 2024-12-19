describe("assertion demo",() => {
    it("implicit assertion",() => {
        cy.visit("https://staging.divii.ca")

        //should and

        // cy.url().should('include','divii.ca')
        // cy.url().should('eq','https://staging.divii.ca/auth')
        // cy.url().should('contain','staging')


        // cy.url().should('include','divii.ca')
        // .should('eq','https://staging.divii.ca/auth')
        // .should('contain','staging')

        cy.url().should('include','divii.ca')
        .and('eq','https://staging.divii.ca/auth')
        .and('contain','staging')

        cy.get('.navbar-brand > img').should('be.visible')
        .and('exist')
        

        cy.get('[data-testid="proceed-to-login"]').click()
        cy.get('[data-testid="email-sign-in"]').click()

        cy.get('[data-testid="login-email-input"]').type("ppp@mailinator.com") //provide a value into input-box
        cy.get('[data-testid="login-email-input"]').should('have.value','ppp@mailinator.com') //


    })
})