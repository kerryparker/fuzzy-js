// in this file you can append custom step methods to 'I' object
let logInButton = { css: 'a.login' };
let logOutButton = { css: '.logout' };
let pageHeadingText = { css: '.page-heading' };

module.exports = function () {
  return actor({
   
    login() {
      this.click(logInButton);
    },

    logout() {
      this.waitForVisible(pageHeadingText);
      this.click(logOutButton);
    },

  });
}
