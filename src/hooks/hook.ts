const { BeforeAll, AfterAll } = require('@cucumber/cucumber')
import { Browser, BrowserContext, chromium } from '@playwright/test';

let browser: Browser;
let context: BrowserContext;


BeforeAll(async () => {
    console.log(
      'Launch Browser using Playwright and Chromium browser, performed once, before the start of all test scenarios.',
    );
    browser = await chromium.launch({ headless: false });
  });

  AfterAll(async () => {
    console.log('Closes Browser before the start of each scenario');
    await browser.close();
  });

