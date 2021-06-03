export default class LoginPage {

  private partialLoginUrl = '/login';
  private username = '#userName';
  private password = '#password';
  private loginButton = '#login';
  private usernameValue = '#userName-value'

  public navigateToLoginPage() {
    cy.visit(this.partialLoginUrl);
  }

  public enterUsernameAndPassword(username: string, password: string) {
    cy.get(this.username).clear().type(username);
    cy.get(this.password).clear().type(password);
  }

  public clickLoginButton() {
    cy.get(this.loginButton).click();
  }

  public assertUsername(username: string){
    cy.get(this.usernameValue).should('have.text', username)
  }
}
