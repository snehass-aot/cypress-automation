// Cypress tutorial
// ----------------
// install and set up -- VScode
// install and set up -- node(npm)

// install package.json
// --------------------
// >>npm -i init

// install cypress
// ----------------
// >>npm install cypress --save -dev

// start cypress
// --------------
// >>npx cypress open
// >>npx cypress run --> directly execute , without opening cypress application.
// >>npx cypress run --headed --> execution directly.
// >>npx cypress run -spec (copy relative path) --> execute a specific file.
// >>npx cypress run --browser chrome -- if we want to run file in chrome (if we want to see both UI and execution in chrome just add "--headed" with this command).


// testSuite ---> testCase ---> Test Steps
// Spec File(cy.js) ---> describe blocks(test suites) ---> it blocks(test).


// Locators
// --------
// CSS selector
// XPath


// cy.get(CSS locator)
// cy.xpath(XPath locator)

// CSS Selector
// ------------
// tag id -> (#id)
// tag class -> (.class)
// tag attribute -> ([attribute='value'])
// tag class attribute -> (.class[attribute='value'])

// inside support -> commands.js -> /// <reference types="Cypress" />[this for(cypress command), cannot write the first line every time]
//                               -> /// <reference types="cypress-xpath" />(for xpath command)

// >>cy.xpath("......./li").should('have.length',7)
// >>cy.xpath("------").xpath("./li").should('have.length',7)


// XPath plugin install
// ---------------------
// >>npm install -D cypress-xpath

// e2e.js
// ------
// require('cypress-xpath')


// Cypress assertions
// ------------------
// 1.implicit assertions -- which are supported by cypress directly.
//        mainly two keywords => should & and
//         >> cy.url().should('include','----') -> to get url
//                          (contain,eq,not.contain,not.eq)
//         >>cy.title() -> to get title

//    cy.get('path....').should('be.visible') -- logo visible or not
//    cy.get('path....').should('exist')  --- logo exist or not
//                      .and('exist')
   
//    cy.xpath("//a").should('have.length','5')  --- get all links
   

// eq
// contain 
// include
// not contain
// not include
// exist
// have.length
// have.value



// 2.explicit assertions
//        mainly two keywords => expect & assert















