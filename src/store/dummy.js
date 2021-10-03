const users = require('../utils/mocks/users');
const auth = require('../utils/mocks/auth');

const database = {
  users,
  auth,
};

const list = (table) => database[table];

const get = (tabla, id) => {
  const col = list(tabla);
  return col.filter((item) => item.id === id)[0] || null;
};

const insert = (tabla, data) => {
  if (!database[tabla]) {
    database[tabla] = [];
  }
  database[tabla].push(data);
};

const update = (table, id) => {
  const { idService } = get(table, id);
  return idService ? [1] : [0];
};

const remove = () => true;

module.exports = {
  list,
  get,
  insert,
  update,
  remove,
};
