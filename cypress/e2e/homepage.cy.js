describe('Homepage', () => {
    it('default journey', () => {
        cy.visit('/');
        cy.get('h1').should('contain.text', 'Companion app');
        cy.get('.SocialPost').should('have.length', 5);
        cy.get('[data-cy="showCommentButton"]').first().click();
        cy.get('.SocialPostComments').should('contain.text', 'There are no comments for this post!');
        cy.get('[data-cy="showCommentButton"]').last().click();
        cy.get('.SocialPostComments').last().should('not.contain.text', 'There are no comments for this post!');
    });
});