class CreateAccountPage {
    visit() {
      cy.visit('http://www.automationpractice.pl/index.php?controller=authentication&back=my-account');
    }

    fillEmail(email) {
      cy.get('#email_create').type(email);
    }

    fillPassword(password) {
      cy.get('#passwd').type(password);
    }

    submitCreateButton() {
      cy.get('#SubmitCreate').click();
    }

    fillFirstName(firstName) {
      cy.get('#customer_firstname').type(firstName);
    }

    fillLastName(lastName) {
      cy.get('#customer_lastname').type(lastName);
    }

    submitAccountButton() {
      cy.get('#submitAccount').click();
    }

    assertAccountCreated() {
      cy.get('.alert').should('contain', 'Your account has been created.');
    }

}  

export default CreateAccountPage;