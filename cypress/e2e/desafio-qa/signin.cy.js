import SigninPage from '../../pages/SigninPage';

describe('Testes de login', () => {
    const signinPage = new SigninPage();
    const email = Cypress.env('TEST_EMAIL');
    const password = Cypress.env('TEST_PASSWORD');

  it('deve logar com sucesso ao utilizar credenciais válidas', () => {
    signinPage.visit();
    signinPage.fillEmail(email);
    signinPage.fillPassword(password);
    signinPage.submitButton();
    signinPage.assertLoginSuccess();
  });

  it('deve mostrar mensagem de erro ao utilizar credenciais inválidas', () => {
    signinPage.visit();
    signinPage.fillEmail('emailinvalido@mail.com');
    signinPage.fillPassword(password);
    signinPage.submitButton();
    signinPage.assertLoginError();
  });

  it('deve mostrar mensagem de erro ao utilizar usuário válido com senha inválida', () => {
    signinPage.visit();
    signinPage.fillEmail(email);
    signinPage.fillPassword('senhainvalida');
    signinPage.submitButton();
    signinPage.assertLoginError();
  });

});