describe("Xpaths with cypress example", () => {
    it("Usage of xpath", () => {
      Cypress.on("uncaught:exception", (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false;
      });
      cy.visit("https://chercher.tech/");
      //Xpath to get the element
      cy.xpath('//img[@id="logo"]').should("be.visible");
    });
  });