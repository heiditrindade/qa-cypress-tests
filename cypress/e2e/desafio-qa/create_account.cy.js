import CreateAccountPage from '../../pages/CreateAccountPage';

describe('criar conta', () => {
  const createAccountPage = new CreateAccountPage();

  it('criar nova conta', () => {
    createAccountPage.visit();
    createAccountPage.fillEmail('novousuario1@mail.com');
    createAccountPage.submitCreateButton();
    createAccountPage.fillFirstName('John');
    createAccountPage.fillLastName('Lenão');
    createAccountPage.fillPassword('entrar123');
    createAccountPage.submitAccountButton();
    createAccountPage.assertAccountCreated();
  });

});