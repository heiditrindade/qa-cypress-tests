class CategoryPages {
    visitWomenCategory() {
        cy.visit('http://www.automationpractice.pl/index.php?id_category=3&controller=category#');
    }

    sortBy(sorting) {
        cy.get('#selectProductSort').select(sorting);
    }

    assertSorting(sorting) {
        cy.get('#selectProductSort').should('contain', sorting);
    }
}  

export default CategoryPages;