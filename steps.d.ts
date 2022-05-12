/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type homePage = typeof import('./pages/home.js');
type authPage = typeof import('./pages/auth.js');
type createAccountPage = typeof import('./pages/createAccount.js');
type myAccountPage = typeof import('./pages/myAccount.js');
type productPage = typeof import('./pages/product.js');
type navPage = typeof import('./pages/nav.js');
type userData = typeof import('./data/user.js');
type Generator_helper = import('./helpers/generator_helper.js');
type ChaiWrapper = import('codeceptjs-chai');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, homePage: homePage, authPage: authPage, createAccountPage: createAccountPage, myAccountPage: myAccountPage, productPage: productPage, navPage: navPage, userData: userData }
  interface Methods extends Playwright, Generator_helper, ChaiWrapper, REST, JSONResponse {}
  interface I extends ReturnType<steps_file>, WithTranslation<Generator_helper>, WithTranslation<ChaiWrapper>, WithTranslation<JSONResponse> {}
  namespace Translation {
    interface Actions {}
  }
}
