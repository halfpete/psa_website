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
      'index.html': './index.html',
    },
    output: {
      path: path.resolve('build'),
      filename: 'rendering/[name].js',
    },
  },
];
