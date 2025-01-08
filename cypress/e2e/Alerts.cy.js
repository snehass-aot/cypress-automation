

describe('Alerts', () => {

    //1)Javascript Alert : It will have some text and an 'OK' button
    it('Js Alert', () => {

        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        
        cy.get("button[onclick='jsAlert()']").click()
        cy.on('window:alert',(t) => {
            expect(t).to.contains('I am a JS Alert')
        })
        
        //Alert window automatically closed by cypress
        cy.get('#result').should('have.text','You successfully clicked an alert')
    })


    //2)Javascript Confirm Alert : It will have some text with 'OK' and 'Cancel' button



    //3)Javascript Prompt Alert : It will have some text with a text box for user input along with 'OK'



    //Authenticated Alert













})