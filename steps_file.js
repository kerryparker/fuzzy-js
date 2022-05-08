// in this file you can append custom step methods to 'I' object

module.exports = function () {
  return actor({

    login() {
      this.click('a.login');
    },

    logout() {
      this.waitForVisible('.page-heading');
      this.click('.logout');
    },

  });
}
