const performance_glitch_user = require("../pages/performance_glitch_user");

const username = "performance_glitch_user";
const password = "secret_sauce";

const firstname = "Ayesha";
const lastname = "Mou";
const postalcode = "1207";

const expectedProduct = "Test.allTheThings() T-Shirt (Red)";
const expectedTotalPrice = "Total: $17.27";
const expectedMessage = "Thank you for your order!";

describe("Test Successful Order Placement Funtionalities with performance_glitch_user", ()=>{

    it("should login successfully with performance_glitch_user", async () => {
        await performance_glitch_user.login(username,password);
        const currentUrl = await browser.getUrl();
        expect(currentUrl).toContain("inventory");
    });

    it("should reset app state from the menu icon ", async () => {
        await performance_glitch_user.clickBurgerMenu();
        await performance_glitch_user.clickResetAppState();
        await performance_glitch_user.clickBurgerCross();
        const empty = await performance_glitch_user.cartItems();
        expect(empty).toBe("");

    });

    it('should filter products by Name (Z to A)', async() => {
        await performance_glitch_user.clickFilter();
        await performance_glitch_user.clickFilterZtoA();
        const receivedProduct = await performance_glitch_user.checkFirstProductName();
        expect(receivedProduct).toEqual(expectedProduct);
    

    });

    it('should add the first product to cart', async() => {
        await performance_glitch_user.selectFirstProduct();
        await performance_glitch_user.clickCart();
        const item = await performance_glitch_user.cartItems();
        expect(item).toBe("1");
    });

    it('should go to Checkout button and verify the product name and the total price', async () => {
        //checkout
        await performance_glitch_user.clickCheckout();
        await performance_glitch_user.enterInformation(firstname, lastname, postalcode);
        await performance_glitch_user.clickContinue();

    // verification of the product name
        const actualProduct = await performance_glitch_user.getProductName();
        expect(actualProduct).toEqual(expectedProduct);

    // verification of the total price
        const actualTotalPrice = await performance_glitch_user.getTotalPrice();
        expect(actualTotalPrice).toEqual(expectedTotalPrice);
    });

    it('should finish purchase process and verify the successful order message', async () => {
        await performance_glitch_user.clickFinish();
        const receivedMessage = await performance_glitch_user.thankYou();
        expect(receivedMessage).toEqual(expectedMessage);
    });

    it('should reset app state again and logout', async () => {
        await performance_glitch_user.clickBurgerMenu();
        await performance_glitch_user.clickResetAppState();
        const empty_2 = await performance_glitch_user.cartItems();
        expect(empty_2).toBe("");
        await performance_glitch_user.clickLogout();
        const lastUrl = await browser.getUrl();
        expect(lastUrl).toEqual("https://www.saucedemo.com/");
    });


});