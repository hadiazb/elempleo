const express = require('express');

const router = express.Router();
const response = require('../network/response');
const config = require('../config/index');

let message = [];

if (config.app.env === 'development') {
  message = [
    {
      user: `http://${config.app.serverHostDevelopment}:${config.app.port}/users`,
      auth: `http://${config.app.serverHostDevelopment}:${config.app.port}/auth`,
      banner: `http://${config.app.serverHostDevelopment}:${config.app.port}/banner`,
    },
  ];
} else {
  message = [
    {
      user: `${config.app.serverHostProduction}/users`,
      banner: `${config.app.serverHostProduction}/banner`,
    },
  ];
}

router.get('/', (req, res) => {
  response.success(req, res, message, 200);
});

module.exports = router;
