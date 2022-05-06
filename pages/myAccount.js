const { I } = inject();

module.exports = {
  pageHeadingText: { css: '.page-heading'},
  orderHistoryBtn: { xpath: '//a[@title="Orders"]' },
  orderReferenceText: { css:'.color-myaccount' },

  waitForPageLoad() {
    I.waitForVisible(this.pageHeadingText);
  },

  checkMyAccountText() {
    this.waitForPageLoad();
    I.see(this.pageHeadingText);
  },

  clickOrderHistory() {
    this.waitForPageLoad();
    I.click(this.orderHistoryBtn);
  },

  async getOrderReferencefromAccount() {
    this.waitForPageLoad();
    let orderReferenceFull = await I.grabTextFrom(this.orderReferenceText);
    let regex = /\b[A-Z]{9}\b/;
    let orderReferenceCorrect = orderReferenceFull.match(regex);
    console.log(orderReferenceCorrect.toString());
    return orderReferenceCorrect.toString();
  },
}
