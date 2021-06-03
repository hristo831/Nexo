import { And, Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import BooksPage from '../ui/booksPage';

const booksPage = new BooksPage();

Given('Navigate to books page', () => {
  booksPage.navigateToBooksPage();
});

When('Search {word} {word}', (word1: string, word2: string) => {
  const bookName = word1 + ' ' + word2;
  booksPage.searchBook(bookName);
});

Then('Book should be found', () => {
  booksPage.assertBookVisible();
});
