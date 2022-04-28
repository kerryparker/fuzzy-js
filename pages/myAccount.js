const { I } = inject();

module.exports = {
  myAccountText: { css: '.page-heading'},

  waitForPageLoad() {
    I.waitForVisible(this.myAccountText);
  },

  checkMyAccountText() {
    this.waitForPageLoad();
    I.click(this.myAccountText);
  }
}
