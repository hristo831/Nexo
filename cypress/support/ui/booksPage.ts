/// <reference types="Cypress" />

export default class BooksPage{

    private partialBooksUrl = '/books';
    private searchBox=  '#searchBox'
    private actionButton = '.action-buttons'
    private bookName = 'Speaking JavaScript'

    public navigateToBooksPage(){
        cy.visit(this.partialBooksUrl);
    }

    public searchBook(bookName: string){
        cy.get(this.searchBox).clear().type(bookName)
    }

    public assertBookVisible(){
        cy.get(this.actionButton).contains(this.bookName).should('be.visible')
    }
}