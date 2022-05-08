const { password } = require("../data/user");

const { I } = inject();

module.exports = {
  genderInput: { css: '#id_gender2' },
  firstNameInput: { css: '#customer_firstname' },
  lastNameInput: { css: '#customer_lastname' },
  passwordInput: { css: '#passwd' },
  birthDaySelect: { css: '#days' },
  birthMonthSelect: { css: '#months' },
  birthYearSelect: { css: '#years' },
  companyInput: { css: '#company' },
  cityInput: { css: '#city' },
  stateSelect: { css: '#id_state' },
  addressInput: { css: '#address1' },
  postalCodeInput: { css: '#postcode' },
  mobilePhoneInput: { css: '#phone_mobile' },
  submitAccountButton: { css: '#submitAccount' },

  fillNewUserForm(user, password) {
    this.waitForPageLoad();
    I.click(this.genderInput);
    I.fillField(this.firstNameInput, user.firstName);
    I.fillField(this.lastNameInput, user.lastName);
    I.fillField(this.passwordInput, password);
    I.selectOption(this.birthMonthSelect, user.birthMonth);
    I.selectOption(this.birthDaySelect, user.birthDay);
    I.selectOption(this.birthYearSelect, user.birthYear);
    I.fillField(this.companyInput, user.company);
    I.fillField(this.addressInput, user.address);
    I.fillField(this.cityInput, user.city);
    I.selectOption(this.stateSelect, user.state);
    I.fillField(this.postalCodeInput, user.postalCode);
    I.fillField(this.mobilePhoneInput, user.mobilePhone)
  },

  submitNewUserForm() {
    I.click(this.submitAccountButton);
  },

  waitForPageLoad() {
    I.waitForVisible(this.firstNameInput);
  },
}
