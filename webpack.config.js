const path = require('path');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminWebp = require('imagemin-webp');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(jpe?g|png)$/i,
        oneOf: [
          {
            resourceQuery: /webp/,
            use: [
              {
                loader: 'responsive-loader',
                options: {
                  adapter: require('responsive-loader/sharp'),
                  format: 'webp',
                  sizes: [300, 600, 1200],
                  name: 'images/[name]-[width].webp',
                },
              },
            ],
          },
          {
            use: [
              {
                loader: 'responsive-loader',
                options: {
                  adapter: require('responsive-loader/sharp'),
                  sizes: [300, 600, 1200],
                  name: 'images/[name]-[width].[ext]',
                },
              },
              {
                loader: 'image-webpack-loader',
                options: {
                  mozjpeg: {
                    progressive: true,
                    quality: 75,
                  },
                  optipng: false,
                  pngquant: false,
                  gifsicle: false,
                },
              },
            ],
          },
        ],
      },
    ],
  },
  plugins: [
    new ImageminPlugin({
      test: /\.(jpe?g|png)$/i,
      plugins: [
        imageminWebp({
          quality: 75,
        }),
      ],
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
  },
};
