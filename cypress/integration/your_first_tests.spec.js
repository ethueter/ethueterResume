describe('Initial Test', function () {
    it('visit my site', function () {
        cy.visit('http://localhost:3000')
        cy.get('Nav')
    })
});





