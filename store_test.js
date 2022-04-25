Feature('store');

Scenario('test something', ({ I }) => {
    I.amOnPage('http://automationpractice.com/index.php');
    I.see('Faded Short Sleeve T-shirts');
    I.moveCursorTo('#icon-phone');
    I.click('//*[@id="newsletter-input"]');
    I.fillField('email', 'depp1987@gmail.com');
    pause();
});
