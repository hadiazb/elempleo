const Banner = require('../../../store/models/Banner');

const list = () => Banner.findAll();

const get = (id) => Banner.findAll({
  where: {
    id,
  },
});

const insert = (body) => Banner.create({
  imgDesktop: body.imgDesktop,
  imgMobile: body.imgMobile,
  imgDescription: body.imgDescription,
  title: body.title,
  subtitle: body.subtitle,
});

const update = (body, id) => Banner.update(
  {
    id: body.id,
    imgDesktop: body.imgDesktop,
    imgMobile: body.imgMobile,
    imgDescription: body.imgDescription,
    title: body.title,
    subtitle: body.subtitle,
  },
  {
    where: {
      id,
    },
  },
);

const remove = (id) => Banner.destroy({
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
