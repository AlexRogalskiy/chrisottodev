describe('Index Page', () => {
  it('Index Page Navigation', () => {
    cy.visit('/')
    cy.title().should('eq', 'Chris Otto | Father, Developer, Test Engineer')
    cy.get('button[aria-label="scroll"]').click()
  })
  it('Posts are rendered', () => {
    cy.get('#post-list').should('be.visible')
    cy.get('#item').should('be.visible')
    cy.get('#item>.link>.gatsby-image-outer-wrapper')
      .first()
      .should('be.visible')
    cy.get('#item>.link>div')
      .first()
      .should('be.visible')
    cy.get('#item>.link>p')
      .first()
      .should('be.visible')
      .next()
      .should('be.visible')
  })
  it('Footer Post Navigation', () => {
    cy.get('footer').scrollIntoView()
    cy.get('#post-page-list').should('be.visible')
    cy.get('#post-page').should('be.visible')
  })
  it('Social Links', () => {
    cy.get('.social').should('be.visible')
    cy.get('.social>a')
      .first()
      .should('have.attr', 'title', 'dev')
      .next()
      .should('have.attr', 'title', 'github')
      .next()
      .should('have.attr', 'title', 'instagram')
      .next()
      .should('have.attr', 'title', 'linkedin')
      .next()
      .should('have.attr', 'title', 'twitter')
  })
})
