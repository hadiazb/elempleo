const express = require('express');
const cors = require('cors');
const debug = require('debug')('app:server');
const connect = require('debug')('app:connect');

const config = require('./config/index');
const errors = require('./network/errors');
const router = require('./network/routes');
const sequelize = require('./store/mysql');
const setCache = require('./utils/cache');

const app = express();
app.use(cors());
app.use(express.json());

router(app);
// app.use(setCache);
app.use(errors);

app.listen(config.app.port, () => {
  if (config.app.env === 'development') {
    debug(
      `Listening on http://${config.app.serverHostDevelopment}:${config.app.port}`,
    );
  }
  if (config.app.env === 'production') {
    debug(`Listening on http://${config.app.env}:${config.app}`);
  }

  sequelize
    .sync({ force: false })
    .then(() => {
      connect('Data base is connect!!!');
    })
    .catch((error) => {
      connect('There is a error with the data base connect', error);
    });
});
