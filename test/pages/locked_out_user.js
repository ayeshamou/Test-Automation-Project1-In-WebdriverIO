const locked_out_user_locator = require("../locators/locked_out_user_locator");

class Locked_out_user{

    async enterUsername(username){
        await locked_out_user_locator.username.setValue(username);

    }

    async enterPassword(password){
        await locked_out_user_locator.password.setValue(password);

    }

    async clickLogin(){
        await locked_out_user_locator.btnLogin.click();

    }
    
    async login(username, password){
      await this.enterUsername(username);
      await browser.pause(3000);
      await this.enterPassword(password);
      await browser.pause(3000);
      await this.clickLogin();
      await browser.pause(3000);
    }

  async visibleError_message(){
    const message = await locked_out_user_locator.errorMessage.getText();
    return message;
  }
}

module.exports = new Locked_out_user();
