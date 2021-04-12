describe('Toska messages', function () {
	it('Messages page can be opened', function () {
		cy.visit('http://localhost:5000')
		cy.contains('Messages').click()
		cy.contains('Send!')
	})
})
