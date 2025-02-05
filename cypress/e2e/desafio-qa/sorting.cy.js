import SigninPage from '../../pages/SigninPage';
import CategoryPages from '../../pages/CategoryPages';

describe('Sorting Tests', () => {
    const signinPage = new SigninPage();
    const categoryPages = new CategoryPages();

    beforeEach(() => {  
        const email = Cypress.env('TEST_EMAIL');
        const password = Cypress.env('TEST_PASSWORD');

        signinPage.visit();
        signinPage.fillEmail(email);
        signinPage.fillPassword(password);
        signinPage.submitButton();
        signinPage.assertLoginSuccess();
    });

    it('deve ordenar produtos por preço crescente', () => {
        categoryPages.visitWomenCategory();
        categoryPages.sortBy('Price: Lowest first');
        categoryPages.assertSorting('Price: Lowest first');
    });

});