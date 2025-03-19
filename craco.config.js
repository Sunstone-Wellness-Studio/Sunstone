const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
          plugin: CracoLessPlugin,
          options: {
            lessLoaderOptions: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        },
      ],
      webpack: {
        configure: (webpackConfig) => {
          // Add a rule to disable fullySpecified for JS and mjs files
          webpackConfig.module.rules.push({
            test: /\.m?js$/,
            resolve: {
              fullySpecified: false,
            },
          });
          return webpackConfig;
        },
      },
  };