const newsRouter = require('./news');
const mineRouter = require('./mine');
const courseRouter = require('./courses');
const siteRouter = require('./site');

function route(app) {
  app.use('/news', newsRouter);
  app.use('/mine', mineRouter);
  app.use('/courses', courseRouter);
  
  app.use('/', siteRouter);
}

module.exports = route;
