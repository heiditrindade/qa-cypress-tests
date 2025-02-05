import CreateAccountPage from '../../pages/CreateAccountPage';

describe('criar conta', () => {
    const createAccountPage = new CreateAccountPage();
    const email = Cypress.env('TEST_EMAIL');
    const password = Cypress.env('TEST_PASSWORD');

  it('criar nova conta', () => {
    createAccountPage.visit();
    createAccountPage.fillEmail(email);
    createAccountPage.submitCreateButton();
    createAccountPage.fillFirstName('John');
    createAccountPage.fillLastName('Lenão');
    createAccountPage.fillPassword(password);
    createAccountPage.submitAccountButton();
    createAccountPage.assertAccountCreated();
  });

});