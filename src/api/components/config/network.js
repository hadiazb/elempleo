const express = require('express');

const router = express.Router();
const response = require('../../../network/response');
const controller = require('./controller');

const list = (req, res, next) => {
  controller
    .list()
    .then((images) => {
      response.success(req, res, images, 200, 'All config Ok');
    })
    .catch(next);
};

const get = (req, res, next) => {
  controller
    .get(req.params.id)
    .then((images) => {
      response.success(req, res, images, 200, 'config Ok');
    })
    .catch(next);
};

const insert = (req, res, next) => {
  controller
    .insert(req.body)
    .then((images) => {
      response.success(req, res, images, 200, 'config Register Ok');
    })
    .catch(next);
};

const update = (req, res, next) => {
  controller
    .update(req.body, req.params.id)
    .then((images) => {
      response.success(
        req,
        res,
        { AffectedRows: `${images} rows` },
        200,
        'config Update Ok',
      );
    })
    .catch(next);
};

const remove = (req, res, next) => {
  controller
    .remove(req.params.id)
    .then((result) => {
      response.success(
        req,
        res,
        {
          userDelete: `${result} config delete with id=${req.params.id} `,
        },
        200,
      );
    })
    .catch(next);
};

router.get('/', list);
router.get('/:id', get);
router.post('/', insert);
router.put('/:id', update);
router.delete('/:id', remove);

module.exports = router;
