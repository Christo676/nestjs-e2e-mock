module.exports = {
    automock: false,
    bail: 0,
    browser: false,
    clearMocks: false,
    collectCoverage: false,
    collectCoverageFrom: [
        'main/**/*.ts',
        '!**/main.ts',
        '!**/*.module.ts',
        '!**/*.dto.ts',
        '!**/*.model.ts',
        '!**/*.provider.ts'
    ],
    coverageDirectory: 'test/coverage',
    coveragePathIgnorePatterns: ['/node_modules/'],
    coverageReporters: ['json', 'text', 'html'],
    // coverageThreshold: {
    //     global: {
    //         "branches": 80,
    //         "functions": 80,
    //         "lines": 80,
    //         "statements": -10
    //     }
    // },
    errorOnDeprecated: false,
    forceCoverageMatch: [],
    globals: {
        'ts-jest': {
            compiler: 'ttypescript'
        }
    },
    maxConcurrency: 5,
    moduleDirectories: ['node_modules'],
    moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
    modulePathIgnorePatterns: [],
    modulePaths: [],
    notify: false,
    notifyMode: 'failure-change',
    preset: 'ts-jest',
    prettierPath: 'prettier',
    resetMocks: false,
    resetModules: false,
    restoreMocks: false,
    rootDir: 'src',
    roots: ['<rootDir>'],
    runner: 'jest-runner',
    setupFiles: [],
    setupFilesAfterEnv: [],
    snapshotSerializers: [],
    testEnvironment: 'node',
    testEnvironmentOptions: {},
    testMatch: ['**/test/**/*.[jt]s?(x)'],
    testPathIgnorePatterns: ['/node_modules/', '/coverage/', '/*.setup.[jt]s?', '/*.teardown.[jt]s?'],
    testRunner: 'jasmine2',
    testURL: 'http://localhost/',
    timers: 'real',
    transformIgnorePatterns: ['node_modules/(?!@lacapitale)'],
    unmockedModulePathPatterns: [],
    verbose: false,
    watchPathIgnorePatterns: [],
    watchPlugins: []
};
