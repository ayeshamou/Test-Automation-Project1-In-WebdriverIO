class Standard_user_locator{

    get username(){
        return $("//input[@id = 'user-name']");
    }

    get password(){
        return $("//input[@id = 'password']");
    }

    get btnLogin(){
        return $("//input[@id = 'login-button']");
    }
    get burgerMenu(){
        return $("//button[@id = 'react-burger-menu-btn']");
    }

    get resetAppState(){
        return $("//a[@id = 'reset_sidebar_link']");
    }

    get burgerCross(){
        return $("//button[@id = 'react-burger-cross-btn']");
    }

    get firstProduct(){
        return $("//button[@id = 'add-to-cart-sauce-labs-backpack']");
    }

    get secondProduct(){
        return $("//button[@id = 'add-to-cart-sauce-labs-bike-light']");
    }

    get thirdProduct(){
        return $("//button[@id = 'add-to-cart-sauce-labs-bolt-t-shirt']");
    }

     get btnCart(){
        return $("//a[@class = 'shopping_cart_link']");
    }
    
    get btnCheckout(){
        return $("//button[@id = 'checkout']");
    }

    get firstname(){
        return $("//input[@id = 'first-name']");
    }
    get lastname(){
        return $("//input[@id = 'last-name']");
    }
    get postalcode(){
        return $("//input[@id = 'postal-code']");
    }

    get btnContinue(){
        return $("//input[@id = 'continue']");
    }

    get firstProductName(){
        return $("//div[contains(text(), 'Sauce Labs Backpack')]");
    }

    get secondProductName(){
        return $("//div[contains(text(), 'Sauce Labs Bike Light')]");
    }

    get thirdProductName(){
        return $("//div[contains(text(), 'Sauce Labs Bolt T-Shirt')]");
    }

    get totalPrice(){
        return $("//div[@data-test = 'total-label']");
    }

    get btnFinish(){
        return $("//button[@id = 'finish']");
    }

    get thankyouMessage(){
        return $("//h2[contains(text(), 'Thank you')]");
    }

    get btnLogout(){
        return $("//a[@id = 'logout_sidebar_link']");
    
    }
}

module.exports = new Standard_user_locator();