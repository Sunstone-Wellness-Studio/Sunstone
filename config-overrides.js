module.exports = function override(config, env) {
    config.module.rules.push({
      test: /\.less$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [
                // Your plugins here, e.g., require('autoprefixer')
              ],
            },
          },
        },
        'less-loader'
      ],
    });
    return config;
  };