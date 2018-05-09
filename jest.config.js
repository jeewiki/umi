module.exports = {
  testMatch: ['**/?(*.)(spec|test|e2e).(j|t)s?(x)'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/examples/',
    '/lib/',
    '/packages/umi/src/scripts/test.js',
    '/packages/umi/src/test.js',
    '/packages/**/fixtures/**/*.test.(j|t)s?(x)',
  ],
  collectCoverageFrom: ['packages/**/src/**/*.{ts,tsx,js,jsx}'],
};
