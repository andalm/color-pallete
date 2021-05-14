it('Hacer click en generar colores, tomar foto, hacer click de nuevo, volver a tomar foto', async () => {
    let folder = new Date().toISOString().replace(/(:|\.)+/g, '');
    cy.visit('/');
    cy.get('button#generate').click({ force: true });
    cy.screenshot(`${Cypress.browser.name}/${folder}/before`);
    cy.get('button#generate').click({ force: true });
    cy.screenshot(`${Cypress.browser.name}/${folder}/after`);
}); 