module.exports = {
    type: 'module',
    preset: 'react-native',
    setupFilesAfterEnv: ['./jest-setup-after-env.js'],
    transform: {
      '^.+\\.js$': 'babel-jest',
    },
  };
  