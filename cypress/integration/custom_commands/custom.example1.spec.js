// type definitions for Cypress object "cy"
// <reference types="cypress" />

describe('Cypress Custom Commands', function() {
    
    //Mostly used for Setup Part
    before(function(){
    cy.fixture('example2').then(function(data)
    {
        this.data=data ;
    })
    })
    
    it('Cypress Test Case', function() {
  
    //Registration on the site
    cy.visit('https://shop.demoqa.com/my-account/');
    cy.get('#reg_username').type(this.data.Username);
    cy.get('#reg_email').type(this.data.Email);
    cy.get('#reg_password').type(this.data.NewPassword);
    cy.get('.woocommerce-Button').click();

    //Checking whether the Registration is successful and whether UserName is populated under login section
    cy.get('#username').should('have.value',this.data.Username);

    // For Loop for Accessing productName array from Features File and Using the custom command
    
    
        // Invoke the Custom command selectProduct
        cy.selectProduct(this.data.productName,this.data.productSize,this.data.productColour);
  
    })
})

//https://www.toolsqa.com/cypress/custom-commands-in-cypress/