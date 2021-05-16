// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload'

Cypress.Commands.add("selectProduct", (productName, size , color) => { 

    // Doing the search part for Shirts.
    cy.get('.noo-search').click()
    cy.get('.form-control').type('Shirt');
    cy.get('.form-control').type('{enter}')
    
    // Searching for product mentioned in fixtures file
    cy.get('.noo-product-inner h3').each(($el , index , $list) => {
        if($el.text().includes(productName)) {
            cy.get($el).click();
        }
    })

    // Selecting the size and color and then adding to cart button.
    cy.get('#pa_color').select(color);
    cy.get('#pa_size').select(size);
    cy.get('.single_add_to_cart_button').click();
 })