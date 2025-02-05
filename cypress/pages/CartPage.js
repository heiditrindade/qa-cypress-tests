class CartPage {
    visit() {
        cy.visit('http://www.automationpractice.pl/index.php?id_product=2&controller=product#/1-size-s/8-color-white');
    }

    addItem() {
        cy.get('#add_to_cart > .exclusive').click();
    }

    assertItemInCart() {
        cy.get('.layer_cart_product').should('contain', 'Product successfully added to your shopping cart');
    }

    checkoutButton() {
        cy.get('.button-medium').click();
    }

    deleteItemFromCart() {
        cy.get('.icon-trash').click();
    }

    assertItemNotInCart() {
        cy.get('.alert').should('contain', 'Your shopping cart is empty.');
    }
}  

  export default CartPage;