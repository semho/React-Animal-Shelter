const webpack = require('webpack');
// eslint-disable-next-line import/order
const [webpackClientConfig, webpackServerConfig] = require('../webpack.config'); // деструкция на общий конфиг
const nodemon = require('nodemon');
const path = require('path');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const express = require('express'); // рекварим новый сервер

const hmrServer = express();
const clientCompiler = webpack(webpackClientConfig); // подключаем к нему конфиг клиента

hmrServer.use(
  webpackDevMiddleware(clientCompiler, {
    publicPath: webpackClientConfig.output.publicPath, // получаем путь из свойств конфига объекта
    serverSideRender: true,
    noInfo: true,
    watchOptions: {
      ignore: /dist/, // не перезаписываем эту папку при изменении
    },
    writeToDisk: true,
    stats: 'errors-only',
  }),
);

hmrServer.use(
  webpackHotMiddleware(clientCompiler, {
    path: '/static/__webpack_hmr',
  }),
);

hmrServer.listen(3001, () => {
  console.log('HMR server successful started');
});

const compiler = webpack(webpackServerConfig); // подключаем конфиг сервера

compiler.run((err) => {
  // холодный старт сервера
  if (err) {
    console.log('Compilation failed: ', err);
  }

  compiler.watch({}, () => {
    // слушаем изменения
    if (err) {
      console.log('Compilation failed: ', err);
    }
    console.log('Compilation was successfully');
  });

  nodemon({
    script: path.resolve(__dirname, '../dist/server/server.js'), // запускаем скрипт сервера
    watch: [
      path.resolve(__dirname, '../dist/server'),
      path.resolve(__dirname, '../dist/client'),
    ],
  });
});
