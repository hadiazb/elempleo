const User = require('../../../store/models/Users');

const list = () => User.findAll();

const get = (id) => User.findAll({
  where: {
    id,
  },
});

const insert = (body) => User.create({
  name: body.name,
  username: body.username,
  email: body.email,
  age: body.age,
  rol: body.rol,
  phone: body.phone,
  numberReports: body.numberReports,
});

const update = (body, id) => User.update(
  {
    id: body.id,
    name: body.name,
    username: body.username,
    email: body.email,
    age: body.age,
    rol: body.rol,
    phone: body.phone,
    numberReports: body.numberReports,
  },
  {
    where: {
      id,
    },
  },
);

const remove = (id) => User.destroy({
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
