const { response, request } = require("express");

const getUser = (req = request, res = response) => {
  const { page = 1, limit = 10, q } = req.query;

  res.json({ msg: "get user", page, limit, q });
};

const updateUser = (req = request, res = response) => {
  const id = req.params.id;

  res.json({ msg: "put user", id });
};

const createUser = (req = request, res = response) => {
  const { nombre, edad } = req.body;
  res.json({ msg: "post user", nombre, edad });
};

const deleteUser = (req = request, res = response) => {
  res.json({ msg: "delete user" });
};

module.exports = {
  getUser,
  updateUser,
  createUser,
  deleteUser,
};
