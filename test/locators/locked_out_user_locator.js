class Locked_out_user_locator{

    get username(){
        return $("//input[@id = 'user-name']");
    }

    get password(){
        return $("//input[@id = 'password']");
    }

    get btnLogin(){
        return $("//input[@id = 'login-button']");
    }

    get errorMessage(){
        return $("//h3[contains(text(), 'Epic sadface:')]");
    }
}

module.exports = new Locked_out_user_locator();