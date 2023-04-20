module.exports = function(api) {
  api.cache(true);

  const presets = ['module:metro-react-native-babel-preset'];
  const plugins = [ ['@babel/plugin-proposal-class-properties', { loose: true }],
  ['@babel/plugin-proposal-private-methods', { loose: true }],
  ['@babel/plugin-proposal-private-property-in-object', { loose: true }],];

  return {
    presets,
    plugins,
  };
};
