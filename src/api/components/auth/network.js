const express = require('express');
const response = require('../../../network/response');
const controller = require('./controller');

const router = express.Router();

const list = (req, res, next) => {
  controller
    .list()
    .then((auths) => {
      response.success(req, res, auths, 200, 'Auths Ok');
    })
    .catch(next);
};

const get = (req, res, next) => {
  controller
    .get(req.params.id)
    .then((auth) => {
      response.success(req, res, auth, 200, 'auth Ok');
    })
    .catch(next);
};

const login = (req, res) => {
  controller
    .login(req.body.email, req.body.password)
    .then((token) => {
      console.log('network soluciona la promesa');
      response.success(req, res, token, 200);
    })
    .catch(() => {
      response.error(
        req,
        res,
        'Error in your information, non-existent user ',
        400,
      );
    });
};

router.get('/auth', list);
router.get('/auth/:id', get);
router.post('/login', login);

module.exports = router;
