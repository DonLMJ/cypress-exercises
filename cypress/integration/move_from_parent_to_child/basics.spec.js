describe('Get with CSS selector and Xpath difference', function() {
    it('Visits the ToolsQA Demo Page and check the menu items', function() {
     
   //Visit the Demo QA Website
    cy.visit("https://demoqa.com/");
    
   // Clicking on Widget Menu Item

    //cy.get(':nth-child(4) > :nth-child(1) > .avatar > svg').click();
    cy.xpath('//body/div[@id="app"]/div[1]/div[1]/div[2]/div[1]/div[4]/div[1]/div[2]/*[1]').click();
   
    //Verify number of items present on Widget Tab
    cy.get(':nth-child(4) > .element-list > .menu-list').find('li').should('have.length',9);
    cy.xpath('//body/div[@id="app"]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[4]/div[1]/ul[1]/li').should('have.length',9);
 
   //Print a string to console to show Async nature, Cypress commands run serially!!!
    cy.log('Using Cypress Log');
    //Console.log() is not a cypress command, so it doesn’t follow the sequential order enforced by Cypress
    console.log('Using Mocha Log'); 
    
   //Verify number of items Menu as text on Widgets Tab
   //Get and Find Command (Parent - Child Relationship)

    //CSS Selector
    cy.get(':nth-child(4) > .element-list').find('span.text').contains('Menu').should('have.length',1);
    //XPath Selector
    cy.xpath('//body/div[@id="app"]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[4]/div[1]/ul[1]/li').find('span.text').contains('Menu').should('have.length',1);
    
  })
})