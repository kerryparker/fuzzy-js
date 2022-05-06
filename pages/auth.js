const { I } = inject();

module.exports = {
  newUserEmailInput: { css: '#email_create' },
  createAccountButton: { css: '#SubmitCreate' },
  registeredUserEmailInput: { css: '#email' },
  registeredUserPasswordInput: { css: '#passwd'},
  signInButton: {css: '#SubmitLogin'},

  waitForPageLoad() {
    I.waitForVisible(this.newUserEmailInput);
  },

  fillNewUserEmail(user) {
    this.waitForPageLoad();
    I.fillField(this.newUserEmailInput, user.emailNew);
  },

  clickCreateAccount() {
    I.click(this.createAccountButton);
  },

  fillRegisteredUserLogin(user) {
    this.waitForPageLoad();
    I.fillField(this.registeredUserEmailInput, user.emailRegistered);
    I.fillField(this.registeredUserPasswordInput, user.password);
  },

  clickSignInAuth() {
    I.click(this.signInButton);
  },
}
