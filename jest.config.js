module.exports = {
    clearMocks: true,
    coverageDirectory: 'coverage',
    testEnvironment: 'node',
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
    modulePathIgnorePatterns: ['<rootDir>/dist/'],
    reporters: [
        'default',
        [
            'jest-slow-test-reporter',
            {
                numTests: 3,
                warnOnSlowerThan: 300,
                color: true,
            },
        ],
    ],
    transform: {'\\.ts$': ['ts-jest']},
};
