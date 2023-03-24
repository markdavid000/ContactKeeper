module.exports = {
  resolve: {
    fallback: { path: require.resolve('path-browserify') },
  },
  resolve: {
    fallback: { util: require.resolve('util/') },
  },
};
