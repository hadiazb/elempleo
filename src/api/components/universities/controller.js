const Universities = require('../../../store/models/Universities');

const list = () => Universities.findAll();

const get = (id) => Universities.findAll({
  where: {
    id,
  },
});

const insert = (body) => Universities.create({
  image: body.image,
  name: body.name,
  imageDescription: body.imageDescription,
  status: body.status,
  link: body.link,
});

const update = (body, id) => Universities.update(
  {
    id: body.id,
    image: body.image,
    name: body.name,
    imageDescription: body.imageDescription,
    status: body.status,
    link: body.link,
  },
  {
    where: {
      id,
    },
  },
);

const remove = (id) => Universities.destroy({
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
