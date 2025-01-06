
describe('handle dropdowns' , () => {
    it('dropdown' , () => {
        cy.visit("https://staging.divii.ca")
        cy.get('[data-testid="proceed-to-login"]').click()
        cy.get('[data-testid="email-sign-in"]').click()
        cy.get('[data-testid="login-email-input"]').type("ppp@mailinator.com")
        cy.get('[data-testid="login-password-input"]').type('123456')
        cy.get('[data-testid="login-btn"]').click()
        cy.wait(10000)
        cy.get("#nav-user").click()
        cy.get('[data-testid="profile-item"]').click()
        //.should('have.value','Account')   



    })
})