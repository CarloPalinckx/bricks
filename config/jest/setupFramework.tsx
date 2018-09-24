/// <reference path="../../src/declarations/global.d.ts" />
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import puppeteer from 'puppeteer';
import { isDebugging } from './e2eTestingInit';

configure({ adapter: new Adapter() });

beforeEach(() => {
    jest.clearAllMocks();
});

beforeAll(async() => {
    global.browser = await puppeteer.launch(isDebugging().puppeteer);
});

afterAll(() => {
    browser.close();
});
