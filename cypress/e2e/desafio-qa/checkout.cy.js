import CheckoutPage from "../../pages/CheckoutPage";
import SigninPage from '../../pages/SigninPage';
import CartPage from '../../pages/CartPage';

describe('Checkout Tests', () => {
    const checkoutPage = new CheckoutPage();
    const signinPage = new SigninPage();
    const cartPage = new CartPage();

    beforeEach(() => {  
        signinPage.visit();
        signinPage.fillEmail('bacev49929@andinewS.com');
        signinPage.fillPassword('entrar123');
        signinPage.submitButton();
        signinPage.assertLoginSuccess();
    });

    it('deve realizar fluxo completo de checkout', () => {
        cartPage.visit();
        cartPage.addItem();
        cartPage.assertItemInCart();
        cartPage.checkoutButton();
        checkoutPage.cartNavigationButton();
        checkoutPage.cartNavigationButton();
        checkoutPage.agreeTermsOfService();
        checkoutPage.cartNavigationButton();
        checkoutPage.payByBankWire();
        checkoutPage.cartNavigationButton();
        checkoutPage.assertOrderConfirmation();
    });

});