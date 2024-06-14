/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const webpack = require('webpack');
const { version, author, license } = require('./package.json');

const config = {
  entry: './src/index.ts',
  output: {
    filename: 'toastui-react-editor.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      type: 'commonjs2',
    },
  },
  externals: {
    'my-awesome13-editor': {
      commonjs: 'my-awesome13-editor',
      commonjs2: 'my-awesome13-editor',
    },
    'my-awesome13-editor/dist/toastui-editor-viewer': {
      commonjs: 'my-awesome13-editor/dist/toastui-editor-viewer',
      commonjs2: 'my-awesome13-editor/dist/toastui-editor-viewer',
    },
    react: {
      commonjs: 'react',
      commonjs2: 'react',
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: [
        'TOAST UI Editor : React Wrapper',
        `@version ${version} | ${new Date().toDateString()}`,
        `@author ${author}`,
        `@license ${license}`,
      ].join('\n'),
    }),
  ],
};

module.exports = () => config;
