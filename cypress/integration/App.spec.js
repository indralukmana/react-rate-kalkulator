// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('Test the kalkulator', () => {
	it('Should visit the site', () => {
		cy.visit('/');

		cy.get('input[data-testid=hourly-rate]').should('have.value', '10');
		cy.get('input[data-testid=work-hours').should('have.value', '40');
		cy.get('input[data-testid=weekly-rate]').should('have.value', '400');
		cy.get('input[data-testid=monthly-rate]').should('have.value', '1600');
		cy.get('input[data-testid=yearly-rate]').should('have.value', '19200');

		cy.get('input[data-testid=hourly-rate]')
			.should('have.value', '10')
			.clear()
			.type('15')
			.should('have.value', '15');
		cy.get('input[data-testid=weekly-rate]')
			.should('have.value', '600')
			.clear()
			.type(300);

		cy.get('input[data-testid=hourly-rate]').should('have.value', '7.5');

		cy.get('input[data-testid=yearly-rate]')
			.clear()
			.type(60000);
		cy.get('input[data-testid=monthly-rate]').should('have.value', '5000');
	});
});
