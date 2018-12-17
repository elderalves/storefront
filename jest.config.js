module.exports = {
  collectCoverageFrom: [
    'app/**/*.{js,jsx,ts,tsx}',
    '!app/**/*.test.{js,jsx,ts,tsx}',
    '!app/*/RbGenerated*/*.{js,jsx,ts,tsx}',
    '!app/app.js',
    '!app/global-styles.js',
    '!app/*/*/Loadable.{js,jsx,ts,tsx}',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {
    '\\.(ts|tsx)$': 'ts-jest',
  },
  coverageThreshold: {
    global: {
      statements: 98,
      branches: 91,
      functions: 98,
      lines: 98,
    },
  },
  moduleDirectories: ['node_modules', 'app'],
  moduleNameMapper: {
    '.*\\.(css|less|styl|scss|sass)$': '<rootDir>/internals/mocks/cssModule.js',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/internals/mocks/image.js',
  },
  setupTestFrameworkScriptFile: '<rootDir>/internals/testing/test-bundler.js',
  setupFiles: ['raf/polyfill', '<rootDir>/internals/testing/enzyme-setup.js'],
  testRegex: 'tests/.*\\.test\\.js$',
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
