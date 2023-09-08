/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,                      // For wallaby
  collectCoverageFrom: ['src/**/*.{js,vue}'], // For wallaby
};