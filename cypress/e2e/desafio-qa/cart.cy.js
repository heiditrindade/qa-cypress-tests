import CartPage from '../../pages/CartPage';
import SigninPage from '../../pages/SigninPage';

describe('Cart Tests', () => {
    const signinPage = new SigninPage();
    const cartPage = new CartPage();

    beforeEach(() => {  
        const email = Cypress.env('TEST_EMAIL');
        const password = Cypress.env('TEST_PASSWORD');
        
        signinPage.visit();
        signinPage.fillEmail('bacev49929@andinewS.com');
        signinPage.fillPassword('entrar123');
        signinPage.submitButton();
        signinPage.assertLoginSuccess();
    });

    it('deve adicionar um item ao carrinho', () => {
        cartPage.visit();
        cartPage.addItem();
        cartPage.assertItemInCart();
    });

    it('deve remover um item do carrinho', () => {
        cartPage.visit();
        cartPage.addItem();
        cartPage.assertItemInCart();
        cartPage.checkoutButton();
        cartPage.deleteItemFromCart();
        cartPage.assertItemNotInCart();
    });

});