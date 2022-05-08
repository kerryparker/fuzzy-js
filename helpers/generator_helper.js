const Helper = require('@codeceptjs/helper');

class Generator_helper extends Helper {
  getRandomEmail() {
    return `${Date.now()}@test.com`;
  };

  getRandomPassword() {
    return Math.random().toString(36).slice(-8);
  };

}

module.exports = Generator_helper;
