const index = require('../api');
const user = require('../api/components/user/network');
const auth = require('../api/components/auth/network');
const banner = require('../api/components/banner/network');
const universities = require('../api/components/universities/network');
const config = require('../api/components/config/network');

const routes = (server) => {
  server.use('/', index);
  server.use('/users', user);
  server.use('/', auth);
  server.use('/banner', banner);
  server.use('/universities', universities);
  server.use('/config', config);
};

module.exports = routes;
