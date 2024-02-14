module.exports = {
  preset: 'ts-jest',
    testEnvironment: 'node',
   extensionsToTreatAsEsm: [],
  testRegex: '/test/.*\\.(test|spec)\\.ts$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testEnvironmentOptions: {
    NODE_ENV: 'test',
    PORT: 5001,
  },
};
