module.exports = {
    preset: 'react-native',
    setupFilesAfterEnv: ['./jest-setup-after-env.js'],
    transform: {
      '^.+\\.js$': 'babel-jest',
    },
    moduleNameMapper: {
      '^@react-native-firebase/app$': '<rootDir>/node_modules/@react-native-firebase/app/lib/index.js',
    }
  };
  