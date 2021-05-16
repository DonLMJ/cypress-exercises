// type definitions for Cypress object "cy"
// <reference types="cypress" />
 
describe('Automation Test Suite - Fixtures', function () {
 
    //Use the cy.fixture() method to pull data from fixture file
    before(function () {
      cy.fixture('example').then(function (data) {
        this.data = data;
      })
    })
   
    it('Cypress Test Case - Understanding Fixtures', function () {
   
      //Provide the data read from the fixture
      cy.visit('https://shop.demoqa.com/my-account/');
      cy.get('#reg_username').type(this.data.Username);
      cy.get('#reg_email').type(this.data.Email);
      cy.get('#reg_password').type(this.data.Password)
   
    })
  })