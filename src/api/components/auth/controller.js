const bcrypt = require('bcrypt');
const auth = require('../../../auth/index');
const Auth = require('../../../store/models/Auth');

async function login(email, password) {
  const data = await Auth.findAll({
    where: {
      email,
    },
  }).then((res) => res[0].toJSON());

  return bcrypt.compare(password, data.password).then((isTheSame) => {
    if (isTheSame === true) {
      console.log('entro', auth.sign(data));
      return auth.sign(data);
    }
    throw new Error('Invalid information');
  });
}

const list = () => Auth.findAll();

const get = (id) => Auth.findAll({
  where: {
    id,
  },
});

const insert = (body) => Auth.create({
  username: body.username,
  password: bcrypt.hashSync(body.password, 10),
  email: body.email,
});

const update = (body, id) => Auth.update(
  {
    username: body.username,
    password: bcrypt.hashSync(body.password, 10),
    email: body.email,
  },
  {
    where: {
      id,
    },
  },
);

const remove = (id) => Auth.destroy({
  where: {
    id,
  },
});

module.exports = {
  list,
  get,
  insert,
  update,
  remove,
  login,
};
