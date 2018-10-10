import { goToComponent } from '../../utility/testing/puppeteer';

const timeout = 1600;

describe('test-test', () => {
    it(
        'this test is a test test',
        async () => {
            await goToComponent('Button', 'With text');

            await jestPuppeteer.debug();

        },
        timeout,
    );
});
