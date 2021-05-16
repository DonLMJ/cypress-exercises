// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('Cypress Test Hooks', function() {
    before(function() {
      // runs once before all tests in the it block
      cy.log("I am in before")
    })
  
    after(function() {
      // runs once after all tests in the it block
      cy.log("I am in after")
    })
  
    beforeEach(function() {
      // runs before each test in the it block
      cy.log("I am in beforeEach")
    })
  
    afterEach(function() {
      // runs after each test in the it block
      cy.log("I am in afterEach")
    })
  
    it('Cypress Test Case 1', function() {
      // Test Steps/Commands for Test Case 1
      cy.log("I am in Test Case 1 ")
      })
  
    specify('Cypress Test Case 2', function() {
      // Test Steps/Commands for Test Case 2
      cy.log("I am in Test Case 2")
      })
  })

//Hooks help in performing a particular set of actions just before/after each test case or before/after all the test cases in the test suite
//Cypress uses the “describe()“ or “context()“ keywords to define a test suite!!!
//each test suite can have one or more test cases. 
//Cypress uses the keywords “it()“ or “specify()“ to define a test cases. 
//Similar to the Test Suite, the TestCase also accepts two parameters: The first parameter is the name of the TestCase. 
//Similarly, the second parameter is the callback function.