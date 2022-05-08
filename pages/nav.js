const { I } = inject();

module.exports = {
  pageHeadingText: { css: '.page-heading' },
  dressesButton: { xpath: '//li/a[.="Dresses"]' },
  myAccountBtn: { css: '.account' },

  waitForPageLoad() {
    I.waitForVisible(this.pageHeadingText);
  },

  clickDressesButton() {
    this.waitForPageLoad();
    I.click(this.dressesButton);
  },

  clickMyAccountBtn() {
    I.click(this.myAccountBtn);
  },

}
