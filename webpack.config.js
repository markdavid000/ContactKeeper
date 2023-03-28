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
  plugins: [
    new webpack.DefinePlugin({
      'process.env.PORT': JSON.stringify(process.env.PORT),
      // ...
    }),
  ],
};
