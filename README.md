# Test-Automation-Project1-In-WebdriverIO

Automation testing scripts for following three testing scenarios on the (https://www.saucedemo.com) site. The automation scripts are craeted using JavaScript, WebdriverIO framework, Mocha (Test Framework), Allure Reports (for rich test reporting), Node.js and NPM.

## Scenario_1:
Try login with locked_out_user and verify the error message.

## Scenario_2:
Log in with standard_user. Then, from the hamburger menu, reset the App State. Add any three items to the cart. Navigate to the final checkout page and verify the product name and total price. Finish the purchase journey and verify the successful order message. Then, reset the App State again and log out.

## Scenario_3:
Login with performance_glitch_user and reset the App State. Then filter by name (Z to A) and select the first product into the cart. Then navigate up to the final checkout page and verify the product name and the total price. Then finish the purchase journey and verify the successful order message. Then, reset the App State again and log out.

## Install Node.js

Make sure Node.js (v16 or later) and npm are installed on your machine.
Download from: https://nodejs.org/en/download

Verify installation:
```bash
node -v
npm -v
```
## Clone the Repository

Clone the project to your local machine using Git:

git clone https://github.com/ayeshamou/Test-Automation-Project1-In-WebdriverIO.git
cd Test-Automation-Project1-In-WebdriverIO


Or unzip the project if downloaded as a ZIP file.

## Install Dependencies

Install all required Node.js packages:

npm install


This will install dependencies defined in the package.json file, such as:

webdriverio → Web automation framework

@wdio/cli → WebdriverIO command-line interface

@wdio/local-runner → For local test execution

@wdio/mocha-framework → Mocha test integration

chai → Assertion library

@wdio/allure-reporter → For generating Allure test reports

## Configure WebdriverIO (if not already configured)

If setting up from scratch, initialize WebdriverIO using:

npx wdio config


During setup, choose:

Test runner: Mocha

Reporter: Allure

Browser: Chrome

Services: chromedriver

Base URL: https://www.saucedemo.com

This will generate a wdio.conf.js configuration file.

## Execution Process in Terminal

## To run all the three test scenarios separately:
1. Scenario_1: npm run locked_out_user
2. Scenario_2: npm run standard_user
3. Scenario_3: npm run performance_glitch_user
   
## To run all the three test scenarios altogether in a sequential way:
npm run locked_outAndstandardAndperformance_glitch

## To view allure report after every excution:
npm run getReport
