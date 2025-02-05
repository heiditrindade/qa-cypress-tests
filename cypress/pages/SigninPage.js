class SigninPage {
    visit() {
      cy.visit('http://www.automationpractice.pl/index.php?controller=authentication&back=my-account');
    }

    fillEmail(email) {
      cy.get('#email').type(email);
    }

    fillPassword(password) {
      cy.get('#passwd').type(password);
    }

    submitButton() {
      cy.get('#SubmitLogin').click();
    }

    assertLoginSuccess() {
      cy.url().should('include', 'my-account');
    }

    assertLoginError() {
      cy.get('ol > li').should('contain', 'Authentication failed');
    }
}  

  export default SigninPage;