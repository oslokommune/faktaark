// https://docs.cypress.io/api/introduction/api.html

import templateA from './util/template.a.spec';

const base = 'localhost:5000';

describe('Check data input matches data outputs', () => {
  it('Visits the app root url', () => {
    cy.visit(base);
    cy.contains('h1', 'Bydelsfakta');
  });
});

templateA(
  'Husholdning etter eie-/leieforhold  i Bydel Frogner (2018)',
  '/bydel/frogner/eierform',
  'eieform-status?geography=05',
  'Bydel Frogner',
  'Eierform',
  'ratio'
);
