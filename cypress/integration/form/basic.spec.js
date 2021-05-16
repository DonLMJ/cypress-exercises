describe('Practice with UI commands in a Form', function() {
    it('Visits the ToolsQA practice form', function() {
     
   //Visit the Demo QA Website
    cy.visit("https://demoqa.com/automation-practice-form");
    
   // Fill inputs Name and Surname
    cy.xpath('//input[@id="firstName"]').type('Aldo') 
    cy.xpath('//input[@id="lastName"]').type('Lamaj') 
   // Fill Email
    cy.xpath('//input[@id="userEmail"]').type('lamaj.aldo@gmail.com')    

    cy.xpath('//body[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/form[1]/div[3]/div[2]/div[1]/input[1]').check({ force: true })

    cy.xpath('//input[@id="userNumber"]').type('123456')

    
    cy.xpath('//input[@id="dateOfBirthInput"]').type('{selectall}4 May 1995{enter}')

    cy.xpath('//input[@id="subjectsInput"]').type('Math')
    cy.xpath('//div[contains(text(),"Maths")]').click()

    cy.xpath('//body/div[@id="app"]/div[1]/div[1]/div[2]/div[2]/div[1]/form[1]/div[7]/div[2]/div[1]').click()
    //cy.xpath('//input[@id="uploadPicture"]').click()

    //cypress-file-upload
    //https://www.npmjs.com/package/cypress-file-upload
    cy.fixture('testPicture.png').then(fileContent => {
        cy.xpath('//input[@id="uploadPicture"]').attachFile({
            fileContent: fileContent.toString(),
            fileName: 'testPicture.png',
            mimeType: 'image/png'
        });
    });
   
    cy.xpath('//textarea[@id="currentAddress"]').type('429D Kingsland Road')
    cy.xpath('//body/div[@id="app"]/div[1]/div[1]/div[2]/div[2]/div[1]/form[1]/div[10]/div[2]/div[1]/div[1]').type('N{enter}')
    cy.xpath('//body/div[@id="app"]/div[1]/div[1]/div[2]/div[2]/div[1]/form[1]/div[10]/div[3]/div[1]/div[1]/div[1]').type('A{enter}')
    
    cy.xpath('//button[@id="submit"]').click()
  })
})