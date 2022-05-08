const ReadFile = require('./helpers/read_file');

Feature('store');

Before(({ homePage }) => {
  homePage.openStore();
});

Scenario('test something', async ({ I, authPage, createAccountPage, myAccountPage, userData }) => {
  I.login();
  authPage.fillNewUserEmail(userData.email = await I.getRandomEmail());
  authPage.clickCreateAccount();
  createAccountPage.fillNewUserForm(userData, userData.password = await I.getRandomPassword());
  createAccountPage.submitNewUserForm();
  myAccountPage.checkMyAccountText();
}).tag('@newuser');

Data(ReadFile.getData()).Scenario('test login & buying', async ({ I, authPage, myAccountPage, navPage, productPage, current }) => {
  I.login();
  authPage.fillRegisteredUserLogin(current.email, current.password);
  authPage.clickSignInAuth();
  navPage.clickDressesButton();
  productPage.clickProductLink();
  let productPrice = await productPage.getProductPrice();
  productPage.clickAddToCartBtn();
  productPage.clickProceedToCheckoutModalBtn()
  let productShipping = await productPage.getProductShipping();
  let productTax = await productPage.getProductTax();
  let productTotalPrice = await productPage.getProductTotalPrice();
  let actualProductPrice = Number(productPrice.slice(1)) + Number(productShipping.slice(1)) + Number(productTax.slice(1));
  I.assertEqual('$' + actualProductPrice, productTotalPrice.slice(0, -1));

  productPage.clickProceedToCheckoutBtn();
  productPage.clickProceedToCheckoutBtn();
  productPage.clickTermsOFService();
  productPage.clickProceedToCheckoutBtn();
  productPage.clickPaymentMethod();
  productPage.clickConfirmOrderBtn();
  let orderReferenceOne = await productPage.getOrderReferencefromCheckout();
  navPage.clickMyAccountBtn();
  myAccountPage.clickOrderHistory();
  let orderReferenceTwo = await myAccountPage.getOrderReferencefromAccount();
  I.assertEqual(orderReferenceOne, orderReferenceTwo);
}).tag('@buy');

After(({ I }) => {
  I.logout();
});