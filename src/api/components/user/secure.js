const auth = require('../../../auth/index');

module.exports = function checkAuth(action) {
  function middleware(req, res, next) {
    const owner = req.body.id;
    switch (action) {
      case 'list':
        auth.check.own(req, owner);
        next();
        break;

      case 'get-id':
        auth.check.own(req, owner);
        next();
        break;

      case 'update':
        auth.check.own(req, owner);
        next();
        break;

      case 'remove':
        auth.check.own(req, owner);
        next();
        break;

      default:
        next();
    }
  }

  return middleware;
};
