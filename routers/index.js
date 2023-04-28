const express = require('express');

const viewsRouter = require('./views');

function routerApp(app) {
  const router = express.Router();
  app.use('/', router);
  router.use('/', viewsRouter);
}

module.exports = routerApp;
