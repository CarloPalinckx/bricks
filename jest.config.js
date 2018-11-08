module.exports = {
    globals: {
        'ts-jest': {
            babelConfig: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: [
                    'require-context-hook',
                    [
                        'babel-plugin-styled-components',
                        {
                            ssr: true,
                        },
                    ],
                ],
            },
        },
    },
    preset: 'ts-jest/presets/js-with-babel',
    setupTestFrameworkScriptFile: './.jest/setupFramework.js',
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
    setupFiles: ['<rootDir>/.jest/setup.js'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/.jest/__mocks__/fileMock.js',
        '\\.(css)$': '<rootDir>/.jest/__mocks__/cssMock.js',
        'resize-observer-polyfill': '<rootDir>/.jest/__mocks__/resizeObserverPolyfill.ts',
        simplebar: '<rootDir>/.jest/__mocks__/simplebar.ts',
        'react-input-range': '<rootDir>/.jest/__mocks__/reactInputRange.tsx',
        'simplebar/dist/simplebar.min.css': '<rootDir>/.jest/__mocks__/simplebarCss.ts',
        'react-popper': '<rootDir>/.jest/__mocks__/reactPopper.tsx',
        'react-beautiful-dnd': '<rootDir>/.jest/__mocks__/reactBeautifulDnd.tsx',
    },
};
