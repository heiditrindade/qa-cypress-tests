// import CheckoutPage from "../../pages/CheckoutPage";
import SigninPage from '../../pages/SigninPage';
import CategoryPages from '../../pages/CategoryPages';

describe('Sorting Tests', () => {
    // const checkoutPage = new CheckoutPage();
    const signinPage = new SigninPage();
    const categoryPages = new CategoryPages();

    beforeEach(() => {  
        signinPage.visit();
        signinPage.fillEmail('bacev49929@andinewS.com');
        signinPage.fillPassword('entrar123');
        signinPage.submitButton();
        signinPage.assertLoginSuccess();
    });

    it('deve ordenar produtos por preço crescente', () => {
        categoryPages.visitWomenCategory();
        categoryPages.sortBy('Price: Lowest first');
        categoryPages.assertSorting('Price: Lowest first');
    });

});