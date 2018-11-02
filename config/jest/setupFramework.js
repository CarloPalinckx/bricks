const { configure } = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
require('jest-styled-components');

const adapter = new Adapter();

configure({ adapter });

beforeEach(() => {
    jest.clearAllMocks();
});
