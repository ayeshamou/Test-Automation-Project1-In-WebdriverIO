const standard_user_locator = require("../locators/standard_user_locator");

class Standard_user{

    async enterUsername(username){
        await standard_user_locator.username.setValue(username);
    }

    async enterPassword(password){
        await standard_user_locator.password.setValue(password);
    }

    async clickLogin(){
        await standard_user_locator.btnLogin.click();
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
        await standard_user_locator.burgerMenu.click();
        await browser.pause(2000);
    }

    
    async clickResetAppState(){
        await standard_user_locator.resetAppState.click();
        await browser.pause(2000);
    }

    async clickBurgerCross(){
        await standard_user_locator.burgerCross.click();
        await browser.pause(2000);
    }

    async selectFirstProduct(){
        await standard_user_locator.firstProduct.click();
    }

    async selectSecondProduct(){
        await standard_user_locator.secondProduct.click();
    }

    async selectThirdProduct(){
        await standard_user_locator.thirdProduct.click();
    }

    async selectProducts(){
        await this.selectFirstProduct();
        await browser.pause(2000);
        await this.selectSecondProduct();
        await browser.pause(2000);
        await this.selectThirdProduct();
        await browser.pause(2000);
    }

    async clickCart(){
        await standard_user_locator.btnCart.click();
        await browser.pause(2000);

        await browser.execute(() => {
        window.scrollTo(0, document.body.scrollHeight);
        });
        await browser.pause(2000);
    }
     async cartItems(){
        const products = await standard_user_locator.btnCart.getText();
        return products;
     }

    async clickCheckout(){
        await standard_user_locator.btnCheckout.click();
        await browser.pause(2000);
    }

    async enterFirstname(firstname){
        await standard_user_locator.firstname.setValue(firstname);
    }

    async enterLastname(lastname){
        await standard_user_locator.lastname.setValue(lastname);
    }

    async enterPostalcode(postalcode){
        await standard_user_locator.postalcode.setValue(postalcode);
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
        await standard_user_locator.btnContinue.click();
        await browser.pause(2000);
    }

    async getProductNames(){
        const products = [];
        products.push(await standard_user_locator.firstProductName.getText());
        products.push(await standard_user_locator.secondProductName.getText());
        products.push(await standard_user_locator.thirdProductName.getText());
        await browser.pause(2000);

        await browser.execute(() => {
        window.scrollTo(0, document.body.scrollHeight);
        });
        await browser.pause(2000);
        return products;
    }

    async getTotalPrice(){
        const price = await standard_user_locator.totalPrice.getText();
        await browser.pause(2000);
        return price;
    }


    async clickFinish(){
        await standard_user_locator.btnFinish.click();
        await browser.pause(2000);
    }

    async thankYou(){
        const thanks = await standard_user_locator.thankyouMessage.getText();
        await browser.pause(1000);
        return thanks;
    }

    async clickLogout(){
        await standard_user_locator.btnLogout.click();
        await browser.pause(2000);
    }

}

module.exports = new Standard_user();





        