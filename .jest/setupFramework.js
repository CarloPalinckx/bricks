const { configure } = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

const adapter = new Adapter();

configure({ adapter });
require('jest-styled-components');

beforeEach(() => {
    jest.clearAllMocks();
});
