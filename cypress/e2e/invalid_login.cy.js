describe('Intercept - Invalid Login', () => {
  it('should show error message on invalid login', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    cy.get('[name="username"]').type('Admin');
    cy.get('[name="password"]').type('admin121'); // typo fixed: missing closing quote

    cy.get('[type="submit"]').click();

    // Assertion: cek pesan error muncul
    cy.get('.oxd-alert-content-text')
      .should('be.visible')
      .and('contain', 'Invalid credentials');
  });
});