const { I } = inject();

module.exports = {
  newUserEmailInput: { css: '#email_create' },
  createAccountButton: { css: '#SubmitCreate' },
  registeredUserEmailInput: { css: '#email' },
  registeredUserPasswordInput: { css: '#passwd' },
  signInButton: { css: '#SubmitLogin' },

  waitForPageLoad() {
    I.waitForVisible(this.newUserEmailInput);
  },

  fillNewUserEmail(email) {
    this.waitForPageLoad();
    I.fillField(this.newUserEmailInput, email);
  },

  clickCreateAccount() {
    I.click(this.createAccountButton);
  },

  fillRegisteredUserLogin(email, password) {
    this.waitForPageLoad();
    I.fillField(this.registeredUserEmailInput, email);
    I.fillField(this.registeredUserPasswordInput, password);
  },

  clickSignInAuth() {
    I.click(this.signInButton);
  },
}
