const { defaults } = require('jest-config')
module.exports = {
  testEnvironment: 'node',
  preset: 'ts-jest',
  verbose: true,
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '^mongoose$': '<rootDir>/node_modules/mongoose',
  },
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx', 'js'],
  modulePathIgnorePatterns: ['__tests__/utils', 'dist'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  // testPathIgnorePatterns: [''],
  globalSetup: './__tests__/setup.js',
  globalTeardown: './__tests__/teardown.js',
  transformIgnorePatterns: [
    'node_modules/(?!devae-data-schemas)',
  ],
}
