/// <reference types="Cypress" />
//This category of assertions contains the commands such as “expect()” and “assert(),” which allow you to pass an explicit subject/object.
 
describe('Explicit Assertions', () => {
    
    it('expect - Validation using explicit assertion on a specified subject', () => {
      
      //Chai's BDD style assertions for using expect
      expect(true).to.be.true
      const obj = { tools: 'qa' }
      expect(obj).to.equal(obj)
      expect(obj).to.deep.equal({ tools: 'qa' })
    })
   
    it('expect - matches text of two elements', () => {
      cy.visit("https://demoqa.com/widgets/");
      
      const normalizeText = (inputString) => inputString.replace(/\s/g, '').toLowerCase()
   
      let firstText
      let secondText
   
      cy.xpath('//body/div[@id="app"]/div[1]/div[1]/div[1]/div[1]')
        .then(($first) => {
          firstText = normalizeText($first.text())
        })
   
        cy.xpath('//body/div[@id="app"]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[4]/span[1]/div[1]/div[1]')
        .then(($second) => {
           secondText = normalizeText($second.text())
   
           expect(secondText, 'second text').to.equal(firstText)
        })
        
        
        
    })
   
    it('assert - given value is an object', () => {
      const employee = {
        name: 'Lakshay',
        age: 34,
      }
   
      assert.isObject(employee, 'value is object')
    })
  })