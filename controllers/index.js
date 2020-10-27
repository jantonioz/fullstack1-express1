const app = require('../app');

module.exports.controller = app => {
  app.get('/', (req, res) => {
    res.render('index', { title: 'Express' });
  });
};
