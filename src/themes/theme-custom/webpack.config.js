// You can extend default webpack build here. Read more on docs: https://github.com/DivanteLtd/vue-storefront/blob/master/doc/Working%20with%20webpack.md
module.exports = function (config, { isClient, isDev }) {
  let configLoaders
  if (isClient) {
    configLoaders = config[0].module.rules
  } else {
    configLoaders = config.module.rules
  }
  configLoaders.push(
    {
      test: /\.css$/,
      use: [
        'style-loader',
        { loader: 'css-loader', options: { importLoaders: 1 } },
        'postcss-loader'
      ]
    }
  )
  return config
}
