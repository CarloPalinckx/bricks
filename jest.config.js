module.exports = {
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.json',
        },
    },
    preset: 'ts-jest',
    testEnvironment: 'node',
    setupTestFrameworkScriptFile: './config/jest/setupFramework.js',
    coverageDirectory: './reports/jest',
    coverageThreshold: {
        src: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        },
    },
    collectCoverageFrom: [
        'src/**/*.{ts,tsx}',
        '!src/**/__snapshots__/*',
        '!<rootDir>/node_modules/',
        '!src/**/story.{ts,tsx}',
        '!src/**/*.test.{ts,tsx}',
        '!src/**/*.d.ts',
        '!src/**/*.DontTest.tsx',
        '!src/index.ts',
        '!src/utility/styled/*',
        '!src/utility/SubscriptionContext/index.tsx',
    ],
    setupFiles: ['./config/jest/setup.js'],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/config/jest/__mocks__/fileMock.js',
        '\\.(css)$': '<rootDir>/config/jest/__mocks__/cssMock.js',
        'resize-observer-polyfill': '<rootDir>/config/jest/__mocks__/resizeObserverPolyfill.ts',
        simplebar: '<rootDir>/config/jest/__mocks__/simplebar.ts',
        'react-input-range': '<rootDir>/config/jest/__mocks__/reactInputRange.tsx',
        'simplebar/dist/simplebar.min.css': '<rootDir>/config/jest/__mocks__/simplebarCss.ts',
        'react-popper': '<rootDir>/config/jest/__mocks__/reactPopper.tsx',
        'react-beautiful-dnd': '<rootDir>/config/jest/__mocks__/reactBeautifulDnd.tsx',
    },
};
