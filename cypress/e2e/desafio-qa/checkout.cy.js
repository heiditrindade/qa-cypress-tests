import CheckoutPage from "../../pages/CheckoutPage";
import SigninPage from '../../pages/SigninPage';
import CartPage from '../../pages/CartPage';

describe('Checkout Tests', () => {
    const checkoutPage = new CheckoutPage();
    const signinPage = new SigninPage();
    const cartPage = new CartPage();

    beforeEach(() => {
        const email = Cypress.env('TEST_EMAIL');
        const password = Cypress.env('TEST_PASSWORD');

        signinPage.visit();
        signinPage.fillEmail(email);
        signinPage.fillPassword(password);
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