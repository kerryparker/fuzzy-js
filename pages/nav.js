const { I } = inject();

module.exports = {
  signInButton: {css: 'a.login'},
  logOutButton: { css: '.logout' },
  pageHeadingText: { css: '.page-heading'},
  dressesButton: { xpath: '//li/a[.="Dresses"]' },
  myAccountBtn: { css: '.account' },

  waitForPageLoad() {
    I.waitForVisible(this.pageHeadingText);
  },

  clickSignInNav() {
    I.click(this.signInButton);
  },

  clickDressesButton() {
    this.waitForPageLoad();
    I.click(this.dressesButton);
  },

  clickMyAccountBtn() {
    I.click(this.myAccountBtn);
  },

  clickLogOut() {
    this.waitForPageLoad();
    I.click(this.logOutButton);
  },
}
