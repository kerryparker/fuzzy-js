Feature('store');

Before(({ homePage }) => {
  homePage.openStore();
})

Scenario('test something', ({ navPage, authPage, createAccountPage, myAccountPage, userData }) => {
  navPage.clickSignInNav();
  authPage.fillNewUserEmail(userData);
  authPage.clickCreateAccount();
  createAccountPage.fillNewUserForm(userData);
  createAccountPage.submitNewUserForm();
  myAccountPage.checkMyAccountText();
});

Scenario('test login & buying', async ({ authPage, myAccountPage, navPage, productPage, I, userData }) => {
  navPage.clickSignInNav();
  authPage.fillRegisteredUserLogin(userData);
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
  console.log(actualProductPrice);
  I.assertEqual('$' + actualProductPrice, productTotalPrice.slice(0, -1));

  productPage.clickProceedToCheckoutBtn();
  productPage.clickProceedToCheckoutBtn();
  productPage.clickTermsOFService();
  productPage.clickProceedToCheckoutBtn();
  productPage.clickPaymentMethod();
  productPage.clickconfirmOrderBtn();
  let orderReferenceOne = await productPage.getOrderReferencefromCheckout();
  navPage.clickMyAccountBtn();
  myAccountPage.clickOrderHistory();
  let orderReferenceTwo = await myAccountPage.getOrderReferencefromAccount();
  I.assertEqual(orderReferenceOne, orderReferenceTwo);
});

After(({ navPage }) => {
  navPage.clickLogOut();
});