import SigninPage from '../../pages/SigninPage';

describe('Testes de login', () => {
  const signinPage = new SigninPage();

  it('deve logar com sucesso ao utilizar credenciais válidas', () => {
    signinPage.visit();
    signinPage.fillEmail('bacev49929@andinews.com');
    signinPage.fillPassword('entrar123');
    signinPage.submitButton();
    signinPage.assertLoginSuccess();
  });

  it('deve mostrar mensagem de erro ao utilizar credenciais inválidas', () => {
    signinPage.visit();
    signinPage.fillEmail('emailinvalido@mail.com');
    signinPage.fillPassword('entrar123');
    signinPage.submitButton();
    signinPage.assertLoginError();
  });

  it('deve mostrar mensagem de erro ao utilizar usuário válido com senha inválida', () => {
    signinPage.visit();
    signinPage.fillEmail('bacev49929@andinews.com');
    signinPage.fillPassword('senhainvalida');
    signinPage.submitButton();
    signinPage.assertLoginError();
  });

});