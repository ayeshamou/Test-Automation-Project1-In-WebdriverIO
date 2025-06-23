const standard_user = require("../pages/standard_user");

const username = "standard_user";
const password = "secret_sauce";

const firstname = "Ayesha";
const lastname = "Mou";
const postalcode = "1207";

const expectedProductNames = ["Sauce Labs Backpack","Sauce Labs Bike Light","Sauce Labs Bolt T-Shirt"];
const expectedTotalPrice = "Total: $60.45";
const expectedMessage = "Thank you for your order!";

describe("Test Successful Order Placement Funtionalities with standard_user", ()=>{

    it("should login successfully with standard_user", async () => {
        await standard_user.login(username,password);
        const currentUrl = await browser.getUrl();
        expect(currentUrl).toContain("inventory");
    });

    it("should reset app state from the menu icon ", async () => {
        await standard_user.clickBurgerMenu();
        await standard_user.clickResetAppState();
        await standard_user.clickBurgerCross();
        const empty = await standard_user.cartItems();
        expect(empty).toBe("");

    });

    it("should add three items to cart", async () => {
        await standard_user.selectProducts();
        await standard_user.clickCart();
        const items = await standard_user.cartItems();
        expect(items).toBe("3");
        
    });

    it('should go to Checkout button and verify the product names and their total price', async () => {
        //checkout
        await standard_user.clickCheckout();
        await standard_user.enterInformation(firstname, lastname, postalcode);
        await standard_user.clickContinue();

    // verification of product names
        const actualProductNames = await standard_user.getProductNames();
        expect(actualProductNames).toEqual(expectedProductNames);

    // verification of total price
        const actualTotalPrice = await standard_user.getTotalPrice();
        expect(actualTotalPrice).toEqual(expectedTotalPrice);
    });

    it('should finish purchase process and verify the successful order message', async () => {
        await standard_user.clickFinish();
        const receivedMessage = await standard_user.thankYou();
        expect(receivedMessage).toEqual(expectedMessage);
    });

    it('should reset app state again and logout', async () => {
        await standard_user.clickBurgerMenu();
        await standard_user.clickResetAppState();
        const empty_2 = await standard_user.cartItems();
        expect(empty_2).toBe("");
        await standard_user.clickLogout();
        const lastUrl = await browser.getUrl();
        expect(lastUrl).toEqual("https://www.saucedemo.com/");
    });


});