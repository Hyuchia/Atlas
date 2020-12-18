const path = require('path');

module.exports = env => {
  let minimize = false;

  if (env) {
    minimize = env.min;
  }

  return {
    entry: './src/index.js',
    mode: 'production',
    output: {
      filename: `atlas.${minimize ? 'min.' : ''}js`,
      path: path.resolve(__dirname, 'dist'),
      library: {
        root: 'Atlas',
        amd: 'atlas',
        commonjs: 'atlas',
      },
	  libraryTarget: 'umd',
	  globalObject: 'this'
    },
    devtool: 'source-map',
    optimization: {
      minimize,
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: '> 5%',
                  },
                ],
              ],
              plugins: [],
            },
          },
        },
      ],
    },
  };
};