import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { pageFixture } from '../../hooks/pageFixture';

setDefaultTimeout(60 * 1000 * 2);

Given('Access Playwright app', async function () {
    await pageFixture.page.goto('https://playwright.dev/');
});

Given('User enter in GET STARTED', async function () {
    //await pageFixture.page.locator('//span[text()="GET STARTED"]').click();
    await pageFixture.page.getByText('GET STARTED').click();
});

Given('User enter in Api Reference', async function () {
    await pageFixture.page.getByText('API reference').click();
});