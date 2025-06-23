const locked_out_user = require("../pages/locked_out_user");

const username = "locked_out_user";
const password = "secret_sauce";
const expectedMessage = "Epic sadface: Sorry, this user has been locked out.";


describe("Test Login with locked_out_user", ()=> {
it("should show an error message for trying login with locked_out_user", async ()=> {

    await locked_out_user.login(username, password);
    const actualMessage = await locked_out_user.visibleError_message();
    expect(actualMessage).toEqual(expectedMessage);

    });
    
});

