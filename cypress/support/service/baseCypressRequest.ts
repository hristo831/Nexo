/// <reference types="Cypress" />

interface cypressRequestOptions {
    body?: object;
    qs?: object;
  }
  
  export function cypressRequest(
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    url: string,
    options?: cypressRequestOptions
  ) {
    return cy.request({
      method: method,
      url: url,
      body: options.body,
      qs: options.qs,
      failOnStatusCode: false,
    });
  }