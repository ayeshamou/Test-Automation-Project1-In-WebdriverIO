## Test-Automation-Project1-In-WebdriverIO

Automation testing scripts for following three testing scenarios on the (https://www.saucedemo.com) site. The automation scripts are craeted using WebdriverIO framework, JavaScript, Mocha (Test Framework), Allure Reports (for rich test reporting), Node.js and NPM.

# Scenario_1:
Try login with locked_out_user and verify the error message.

# Scenario_2:
Log in with standard_user. Then, from the hamburger menu, reset the App State. Add any three items to the cart. Navigate to the final checkout page and verify the product name and total price. Finish the purchase journey and verify the successful order message. Then, reset the App State again and log out.

# Scenario_3:
Login with performance_glitch_user and reset the App State. Then filter by name (Z to A) and select the first product into the cart. Then navigate up to the final checkout page and verify the products' name and the total price. Then finish the purchase journey and verify the successful order message. Then, reset the App State again and log out.

# Execution Process in Terminal
1. To run all the three test scenarios separately:
    Scenario_1: npm run locked_out_user
    Scenario_2: npm run standard_user
    Scenario_3: npm run performance_glitch_user
   
2. To run all the three test scenarios altogether in a sequential way:
    Together: npm run locked_outAndstandardAndperformance_glitch
   
3. To view allure report after every excution:
    npm run getReport
