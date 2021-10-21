const Config = require('../../../store/models/Config');

const list = () => Config.findAll();

const get = (id) => Config.findAll({
  where: {
    id,
  },
});

const insert = (body) => Config.create({
  timeBanner: body.timeBanner,
  timeCarousel: body.timeCarousel,
  captchaId: body.captchaId,
  captchaVisible: body.captchaVisible,
});

const update = (body, id) => Config.update(
  {
    id: body.id,
    timeBanner: body.timeBanner,
    timeCarousel: body.timeCarousel,
    captchaId: body.captchaId,
    captchaVisible: body.captchaVisible,
  },
  {
    where: {
      id,
    },
  },
);

const remove = (id) => Config.destroy({
  where: {
    id,
  },
});

module.exports = {
  insert,
  list,
  get,
  remove,
  update,
};
