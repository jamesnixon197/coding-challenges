module.exports = {
    clearMocks: true,
    coverageDirectory: 'coverage',
    testEnvironment: 'node',
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
    modulePathIgnorePatterns: ['<rootDir>/dist/'],
    transform: {'\\.ts$': ['ts-jest']}
};
