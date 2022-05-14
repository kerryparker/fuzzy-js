const Helper = require('@codeceptjs/helper');

class Api extends Helper {

  async getCurrencyRate() {
    let currency = 'USD';
    let response = await this.helpers['REST']._executeRequest({
      url: `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${currency}&json`,
   });
    let obj = response.data[0];
    return obj.rate;
  };

  async calculateCurrency(price) {
    let rate = await this.getCurrencyRate();
    let calculation = rate * price;
    return Number.parseFloat(calculation).toFixed(2)
  };

}

module.exports = Api;
