module.exports = [
  {
    name: 'client',
    target: 'web',
    /* your client side configuration */
  },
  {
    name: 'rendering',
    target: 'node',
    entry: {
      'index.html': './my-app/src/App.js',
    },
    output: {
      path: path.resolve('build'),
      filename: 'rendering/[name].js',
    },
  },
];
