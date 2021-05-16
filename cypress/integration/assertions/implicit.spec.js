/// <reference types="Cypress" />
//When the assertion applies to the object provided by the parent chained command, its called an Implicit assertion. 
//Additionally, this category of assertions generally includes commands such as “.should()” and “.and().” 
describe('Implicit Assertions', () => {
    it('.should() - make an assertion about the current subject', () => {
      cy.visit('https://demoqa.com/webtables')
      
      cy.get('.rt-table')
        .find('.rt-tbody > :nth-child(3)')
        .should('have.class', 'rt-tr-group')
        .find('.rt-tr > :nth-child(1)')
      cy.xpath('//div[contains(text(),"Kierra")]')
        
        // checking the text of the <td> element in various ways
        .should('have.text', 'Kierra')
        .should('contain', 'Kierra')
        .should('have.html', 'Kierra')
        
        // Checking whether the text matches the regular expression
        // Here, first we have invoked the jQuery method text()
        // and then validated it using the regular expression
        .invoke('text')
        .should('match', /Kierra/i)
    })
   
  })


