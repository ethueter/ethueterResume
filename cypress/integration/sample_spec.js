describe('My First Test', function () {
    it('Does not do much!', function () {
        expect(true).to.equal(true)
    })
})

describe('First test for my site', function () {
    it('tests if site is up', function() {
        cy.visit('http://localhost:3000')
        cy.contains('Tyler')
        cy.get('Nav').contains('Projects')
    })
})

