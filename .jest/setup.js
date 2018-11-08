require('babel-plugin-require-context-hook/register')();
const intl = require('intl');

const orginalError = console.error;
const orginalWarn = console.warn;
/* tslint:disable-next-line */
const orginalLog = console.log;

global.addEventListener = jest.fn();
global.removeEventListener = jest.fn();
global.console.error = jest.fn(orginalError);
global.console.warn = jest.fn(orginalWarn);
global.console.log = jest.fn(orginalLog);

global.getSelection = jest.fn().mockReturnValue({
    removeAllRanges: jest.fn(),
});

global.Intl = intl;

const anchorRef = {
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
};
