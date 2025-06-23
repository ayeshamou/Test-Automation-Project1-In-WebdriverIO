const performance_glitch_user_locator = require("../locators/performance_glitch_user_locator");

class Performance_glitch_user{
    async enterUsername(username){
            await performance_glitch_user_locator.username.setValue(username);
        }
    
        async enterPassword(password){
            await performance_glitch_user_locator.password.setValue(password);
        }
    
        async clickLogin(){
            await performance_glitch_user_locator.btnLogin.click();
        }
        
        async login(username, password){
            await this.enterUsername(username);
            await browser.pause(2000);
            await this.enterPassword(password);
            await browser.pause(2000);
            await this.clickLogin();
            await browser.pause(2000);
        }
        
        async clickBurgerMenu(){
            await performance_glitch_user_locator.burgerMenu.click();
            await browser.pause(2000);
        }
    
        
        async clickResetAppState(){
            await performance_glitch_user_locator.resetAppState.click();
            await browser.pause(2000);
        }
    
        async clickBurgerCross(){
            await performance_glitch_user_locator.burgerCross.click();
            await browser.pause(2000);
        }

        async clickFilter(){
            await performance_glitch_user_locator.btnFilter.click();
            await browser.pause(2000);
        }

        async clickFilterZtoA(){
            await performance_glitch_user_locator.filterZtoA.click();
            await browser.pause(2000);
        
        }
        async checkFirstProductName(){
            const name = await performance_glitch_user_locator.firstProductName.getText();
            return name;

        }

        async selectFirstProduct(){
            await performance_glitch_user_locator.firstProduct.click();
            await browser.pause(2000);
        }

        async clickCart(){
            await performance_glitch_user_locator.btnCart.click();
            await browser.pause(2000);
    
            await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
            });
            await browser.pause(2000);
        }
        async cartItems(){
            const products = await performance_glitch_user_locator.btnCart.getText();
            return products;
        }

        async clickCheckout(){
            await performance_glitch_user_locator.btnCheckout.click();
            await browser.pause(2000);
        }
    
        async enterFirstname(firstname){
            await performance_glitch_user_locator.firstname.setValue(firstname);
        }
    
        async enterLastname(lastname){
            await performance_glitch_user_locator.lastname.setValue(lastname);
        }
    
        async enterPostalcode(postalcode){
            await performance_glitch_user_locator.postalcode.setValue(postalcode);
        }
    
        async enterInformation(firstname, lastname, postalcode){
            await this.enterFirstname(firstname);
            await browser.pause(2000);
            await this.enterLastname(lastname);
            await browser.pause(2000);
            await this.enterPostalcode(postalcode);
            await browser.pause(2000);
        }
    
        async clickContinue(){
            await performance_glitch_user_locator.btnContinue.click();
            await browser.pause(2000);
        }
    
        async getProductName(){
            const name = await performance_glitch_user_locator.productName.getText();
    
            await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
            });
            await browser.pause(2000);
            return name;
        }
    
        async getTotalPrice(){
            const price = await performance_glitch_user_locator.totalPrice.getText();
            await browser.pause(2000);
            return price;
        }
    
    
        async clickFinish(){
            await performance_glitch_user_locator.btnFinish.click();
            await browser.pause(2000);
        }
    
        async thankYou(){
            const thanks = await performance_glitch_user_locator.thankyouMessage.getText();
            await browser.pause(1000);
            return thanks;
        }
    
        async clickLogout(){
            await performance_glitch_user_locator.btnLogout.click();
            await browser.pause(2000);
        }
    



}
module.exports = new Performance_glitch_user();