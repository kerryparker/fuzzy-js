const myAccount = require("./pages/myAccount");

let user = {
    firstName: 'Test',
    lastName: 'Automation',
    password: '12345',
    birthDay: '1',
    birthMonth: '5',
    birthYear: '1901',
    company: 'Netflix',
    state: 'Alabama',
    city: 'Birmingham',
    address: '801 Tom Martin Dr.',
    postalCode: '35211',
    mobilePhone: "+19159969739",
}

Feature('store');

Scenario('test something', ({ I, homePage, authPage, createAccountPage }) => {
    homePage.openStore();
    homePage.clickSignIn();
    authPage.fillNewUserEmail(Date.now() + '@test.com');
    authPage.clickCreateAccount();
    createAccountPage.fillNewUserForm(user);
    createAccountPage.submitNewUserForm();
    myAccount.checkMyAccountText();
    pause();
});
