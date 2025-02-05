class CheckoutPage {
    cartNavigationButton() {
        cy.get('.cart_navigation > .button > span').click();
    }

    assertAddressPage() {
        cy.url().should('include', 'address');
      }

    fillAddress(address) {
        cy.get('#address1').type(address);
    }

    fillCity(city) {
        cy.get('#city').type(city);
    }

    selectState(state) {
        cy.get('#id_state').select(state);
    }

    fillPostalCode(postalCode) {
        cy.get('#postcode').type(postalCode);
    }

    fillHomePhone(homePhone) {
        cy.get('#phone').type(homePhone);
    }

    submitAddressButton() {
        cy.get('#submitAddress > span').click();
    }

    agreeTermsOfService() {
      cy.get('#cgv').click();
    } 

    payByBankWire() {
      cy.get('.bankwire').click();
    }

    assertOrderConfirmation() {
      cy.get('.alert').should('contain', 'Your order on My Shop is complete.');
    }
}  

  export default CheckoutPage;