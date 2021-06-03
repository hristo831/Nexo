import { And, Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import { createUser } from '../service/services/accountService';
import LoginPage from '../ui/loginPage';

const loginPage = new LoginPage();

const username = 'hristo' + Math.floor(Math.random() * 100000 + 1).toString();
const password = '520396asD!';

Given('Create user through API', () => {
  createUser({ userName: username, password: password }).then((response) => {
    expect(response.status).to.eq(201);
  });
});

When('Navigate to login page', () => {
  loginPage.navigateToLoginPage();
});

And('Fill in UserName and Password', () => {
  loginPage.enterUsernameAndPassword(username, password);
});

And('Click Login button', () => {
  loginPage.clickLoginButton();
});

Then('The user successfully login', () => {
  loginPage.assertUsername(username);
});
