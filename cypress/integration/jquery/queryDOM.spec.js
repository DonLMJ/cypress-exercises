// type definitions for Cypress object "cy"

/// <reference types="Cypress" />


describe('JQuery and Cypress Test Case', function () {
    it('Performing JQuery Operation', function () {
      cy.visit("https://demoqa.com/elements");
      cy.request("/")
        .its('body')
        .then(html => {
          const $titlePage = Cypress.$('.main-header').text();
          cy.log('Title of Page is: ' + $titlePage);
        })
      })
  })

// Cypress.$() is a synchronous call and all other methods of cypress are asynchronous
//So wait for the cypress method, such as cy.visit() to complete their execution and the pass on context to Cypress.$() method.
//When you are running the above test case, right-click on the browser window and select console!!!
//write : Cypress.$('.main-header').text()
//You will get: Elements to troubleshoot !!!!

// Cypress querying an element and assigning to constant will not work
//const element = cy.get('selector_of_web-element');

//It will not work as the Cypress’s get() method will not return anything synchronously. 
//As we have already covered in the chapter, “Cypress commands are asynchronous,” all the Cypress commands return a promise, and we can never assign a promise to any constant variable.