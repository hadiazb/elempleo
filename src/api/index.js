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
      universities: `http://${config.app.serverHostDevelopment}:${config.app.port}/universities`,
    },
  ];
} else {
  message = [
    {
      user: `${config.app.serverHostProduction}/users`,
      banner: `${config.app.serverHostProduction}/banner`,
      universities: `${config.app.serverHostProduction}/universities`,
    },
  ];
}

router.get('/', (req, res) => {
  response.success(req, res, message, 200);
});

module.exports = router;
