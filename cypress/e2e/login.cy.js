describe('CssSelectors', () => {
    it('cssSelectors', () => {
        cy.visit('https://staging.divii.ca/auth?auth=0&page=1');
        cy.get('#app').click();
        cy.get("button[type='button']").click();
        cy.get('[data-testid=email-sign-in]').click();
        cy.get('[data-testid=login-email-input]').click();
        cy.get('[data-testid=login-email-input]').type('jerry@mailinator.com');
        cy.get('[data-testid=login-password-input]').type('123456');
        cy.get("button[type='button']").click()
        cy.wait(10000)
        cy.get("#nav-user").click()
        cy.get("#nav-logout").click()
    })
})
