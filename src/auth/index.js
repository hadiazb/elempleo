const jwt = require('jsonwebtoken');
const error = require('../utils/error');
const config = require('../config/index');

function sign(data) {
  return jwt.sign(data, config.auth.secret, {
    expiresIn: 60 * 30,
  });
}

function verify(token) {
  return jwt.verify(token, config.auth.secret);
}

function getToken(auth) {
  if (!auth) {
    throw error('No viene token', 401);
  }

  if (auth.indexOf('Bearer ') === -1) {
    throw error('Formato invalido', 401);
  }

  const token = auth.replace('Bearer ', '');
  return token;
}

function decodeHeader(req) {
  const authorization = req.headers.authorization || '';
  const token = getToken(authorization);
  const decoded = verify(token);

  req.user = decoded;

  return decoded;
}

const check = {
  own(req, owner) {
    const decoded = decodeHeader(req);
    // console.log(decoded.id, owner);

    if (decoded.id !== owner) {
      throw error('No puedes hacer esto', 401);
    }
  },
};

module.exports = {
  sign,
  check,
};
