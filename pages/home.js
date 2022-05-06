const { I } = inject();

module.exports = {
  storeLink: 'http://automationpractice.com/index.php',

  openStore() {
    I.amOnPage(this.storeLink);
  },
}
