const { I } = inject();

module.exports = {
  productLink: { xpath: '//a[@class="product_img_link"]/img[@src="http://automationpractice.com/img/p/1/6/16-home_default.jpg"]' },
  price: { css: '#our_price_display' },
  addToCartButton: { css: '#add_to_cart > button' },
  proceedToCheckoutModalBtn: { xpath: '//a[@title="Proceed to checkout"]' },
  proceedToCheckoutBtn: 'Proceed to checkout',
  pageHeadingText: { css: '.page-heading' },
  shipping: { css: '#total_shipping' },
  tax: { css: '#total_tax' },
  totalPrice: { css: '#total_price' },
  termsOfService: { css: '#cgv' },
  paymentMethod: { xpath: '//a[@title="Pay by bank wire"]' },
  confirmOrderBtn: { css: '#cart_navigation > button' },
  orderCompleteText: { css: '.box' },
  myAccountBtn: { css: '.account' },

  waitForPageLoad() {
    I.waitForVisible(this.pageHeadingText);
  },

  waitForModalLoad() {
    I.waitForVisible(this.proceedToCheckoutModalBtn);
  },

  clickProductLink() {
    I.waitForVisible(this.productLink);
    I.forceClick(this.productLink);
  },

  async getProductPrice() {
    I.waitForVisible(this.price);
    return await I.grabTextFrom(this.price);
  },

  clickAddToCartBtn() {
    I.click(this.addToCartButton);
  },

  clickProceedToCheckoutModalBtn() {
    this.waitForModalLoad();
    I.click(this.proceedToCheckoutModalBtn);
  },

  clickProceedToCheckoutBtn() {
    this.waitForPageLoad();
    I.click(this.proceedToCheckoutBtn);
  },

  async getProductShipping() {
    this.waitForPageLoad();
    return await I.grabTextFrom(this.shipping);
  },

  async getProductTax() {
    return await I.grabTextFrom(this.tax);
  },

  async getProductTotalPrice() {
    return await I.grabTextFrom(this.totalPrice);
  },

  getActualProductPrice(productPrice, productShipping, productTax) {
    this.waitForPageLoad();
    let actualProductPrice = Number(productPrice.slice(1)) + Number(productShipping.slice(1)) + Number(productTax.slice(1));
    return actualProductPrice;
  },

  checkProductPriceEqual(actualProductPrice, productTotalPrice) {
    return I.assertEqual('$' + actualProductPrice, productTotalPrice.slice(0, -1));
  },

  clickTermsOFService() {
    this.waitForPageLoad();
    I.waitForVisible(this.termsOfService);
    I.click(this.termsOfService);
  },

  clickPaymentMethod() {
    I.waitForVisible(this.paymentMethod)
    I.click(this.paymentMethod);
  },

  clickConfirmOrderBtn() {
    this.waitForPageLoad();
    I.waitForVisible(this.confirmOrderBtn);
    I.click(this.confirmOrderBtn);
  },

  async getOrderReferencefromCheckout() {
    this.waitForPageLoad()
    let ordercompleteText = await I.grabTextFrom(this.orderCompleteText);
    let regex = /\b[A-Z]{9}\b/;
    let orderReference = ordercompleteText.match(regex);
    return orderReference.toString();
  },

  clickMyAccountBtn() {
    I.click(this.myAccountBtn);
  }
}
