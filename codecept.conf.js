const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://localhost',
      show: true,
      browser: 'firefox',
      waitForNavigation: 'networkidle0',
      waitForTimeout: 15000,
      timeout: 15000,
    },
    Generator_helper: {
      require: './helpers/generator_helper.js',
    },
    ChaiWrapper: {
      require: 'codeceptjs-chai',
    }
  },
  include: {
    I: './steps_file.js',
    homePage: './pages/home.js',
    authPage: './pages/auth.js',
    createAccountPage: './pages/createAccount.js',
    myAccountPage: './pages/myAccount.js',
    productPage: './pages/product.js',
    navPage: './pages/nav.js',
    userData: './data/user.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'fuzzy-js'
}