jest.setMock('selenium-webdriver', webdriver);
// This file was generated using Selenium IDE
const tests = require("../commons.js");
global.Key = require('selenium-webdriver').Key;
global.URL = require('url').URL;
global.BASE_URL = configuration.baseUrl || 'https://user-management-web-app.herokuapp.com/';
let vars = {};
jest.setTimeout(300000);
test("Provjera dugme za notifikacije", async () => {
  await tests["Provjera dugme za notifikacije"](driver, vars);
  expect(true).toBeTruthy();
});