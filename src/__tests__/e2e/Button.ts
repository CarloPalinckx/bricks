import puppeteer from 'puppeteer';
import { isDebugging } from '../../../config/jest/e2eTestingInit';

const STORYBOOK = 'http://localhost:9001';

const timeout = 1600;

describe('test-test', () => {
    test(
        'this test is a test test',
        async() => {
           const page = await global.browser.newPage();
           await page.goto(STORYBOOK);


        },
        timeout,
    );
});
