const Auth = require('./models/Auth');
const Users = require('./models/Users');

Users.hasOne(Auth, {
  foreignKey: 'id',
});
