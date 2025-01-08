

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

    it('Js Confirm Alert-Ok', () => {

        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        
        cy.get("button[onclick='jsConfirm()']").click()
        cy.on('window:confirm',(t) => {
            expect(t).to.contains('I am a JS Confirm')
        })
        
        //Cypress automatically close alert window by using ok button - default
        cy.get('#result').should('have.text','You clicked: Ok')
    })


    it('Js Confirm Alert -Cancel', () => {

        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        
        cy.get("button[onclick='jsConfirm()']").click()
        cy.on('window:confirm',(t) => {
            expect(t).to.contains('I am a JS Confirm')
        })
        
        cy.on('window:confirm',() => false);//cypress closes alert window using cancel button
        
        cy.get('#result').should('have.text','You clicked: Cancel')
    })




    //3)Javascript Prompt Alert : It will have some text with a text box for user input along with 'OK'

         it.only('Js prompt Alert', () => {

        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')

        cy.window().then((win) => {
            cy.stub(win,'prompt').returns('welcome')
        })
        
        cy.get("button[onclick='jsPrompt()']").click()

        //cypress will automatically close prompted alert - it will use OK button - by default
         
         cy.on('window:prompt',() => false);//cypress closes alert window using cancel button

         cy.get('#result').should('have.text','You entered: welcome')
    })


    //Authenticated Alert
    it.only('Authenticated alert',() => {

        //approach1
        // cy.visit('http://the-internet.herokuapp.com/basic_auth',{ auth: 
        //                                                         {
        //                                                           username:'admin',
        //                                                           password:'admin'
        //                                                          }
        //                                                         } )
        // cy.get("div[class='example'] p").should('have.contain',"Congratulations")


        cy.visit("http://admin:admin@the-internet.herokuapp.com/basic_auth")
        cy.get("div[class='example'] p").should('have.contain',"Congratulations")
    })
    

})