module.exports = {
  resolve: {
    fallback: { path: require.resolve('path-browserify') },
  },
  resolve: {
    fallback: { util: require.resolve('util/') },
  },
  resolve: {
    fallback: { os: require.resolve('os-browserify/browser') },
  },
  resolve: {
    fallback: { fs: require.resolve('fs/') },
  },
};
