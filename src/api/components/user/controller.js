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
  role: body.role,
  phone: body.phone,
  website: body.website,
  avatar: body.avatar,
  picture: body.picture,
  company: body.company,
  address: body.address,
  city: body.city,
  country: body.country,
  zipcode: body.zipcode,
});

const update = (body, id) => User.update(
  {
    id: body.id,
    name: body.name,
    username: body.username,
    email: body.email,
    age: body.age,
    role: body.role,
    phone: body.phone,
    website: body.website,
    avatar: body.avatar,
    picture: body.picture,
    company: body.company,
    address: body.address,
    city: body.city,
    country: body.country,
    zipcode: body.zipcode,
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
