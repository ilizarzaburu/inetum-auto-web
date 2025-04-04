
import { Given, Then, When } from '@cucumber/cucumber';
import { pageFixture } from '../../hooks/pageFixture';
import { expect } from '@playwright/test';


  Given('Load Swag Labs web',async function () {
    await pageFixture.page.goto('https://www.saucedemo.com/');
    
  });



  When('enter user {string} and password {string}',async function (username, password) {
    await pageFixture.page
    .locator('user-name')
    .type(username);

    await pageFixture.page
    .locator('password')
    .type(password);
  });



  
  When('click on login button', async function async() {
    await pageFixture.page
    .locator('login-button')
    .click();
  });


  Then('the system validate the user can see the product list', async function () {
    
  });

  Then('the system validate the user can see the product list', async function () {
    await pageFixture.page
    .locator('//*[@id="header_container"]/div[2]/span')
    .click();
  });
  

  Then('the system validate the user can not access, {string}}', async function (messageValidation) {
    await expect(await pageFixture.page
      .locator('//*[@id="login_button_container"]/div/form/div[3]/h3')
      .textContent()).toEqual(messageValidation);
  });

  