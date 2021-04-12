describe('Toska messages', function () {
	it('Messages page can be opened', function () {
		cy.visit('http://localhost:8000')
		cy.contains('Messages').click()
		cy.contains('Send!')
	})
})
