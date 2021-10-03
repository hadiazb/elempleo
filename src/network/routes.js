const index = require('../api');
const user = require('../api/components/user/network');
const auth = require('../api/components/auth/network');

const routes = (server) => {
  server.use('/', index);
  server.use('/users', user);
  server.use('/', auth);
};

module.exports = routes;
