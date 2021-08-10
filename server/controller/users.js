const { User } = require("../models");

const getALl = async (req, res) => {
  const users = await User.findAll();
  res.json(users.map((user) => user.dataValues));
};

const createOne = async (req, res) => {
  let body = req.body;
  if (!body.name || !body.email || !body.age || !body.sex || !body.programmer) {
    return res.status(422).json({ message: "Invalid data provided" });
  }
  let user;
  try {
    user = await User.create({
      ...req.body,
    });
  } catch (err) {
    return res.status(400).json({ message: "Unable to create user" });
  }
  res.status(201).json({ ...user.dataValues });
};

const getOne = async (req, res) => {
  var user;
  try {
    user = await User.findOne({
      where: { id: req.params.id },
    });
  } catch (err) {
    return res.status(404).json({ message: "User not found" });
  }
  if (user) res.json({ ...user.dataValues });
  else res.status(404).json({ message: "User not found" });
};

const updateById = async (req, res) => {
  let body = req.body;
  if (!body.name && !body.email && !body.age && !body.sex && !body.programmer) {
    return res.status(422).json({ message: "Invalid data provided" });
  }
  let id = req.params.id;
  let user;
  try {
    user = await User.update(
      {
        ...body,
      },
      {
        where: { id },
      }
    );
  } catch (err) {
    return res.status(422).json({ message: "Unable to update" });
  }
  if (user[0] === 0) {
    return res.status(422).json({ message: "Unable to update" });
  }
  res.json({ message: "User updated successfully" });
};

const deleteOne = async (req, res) => {
  var user;
  try {
    user = await User.destroy({
      where: { id: req.params.id },
    });
  } catch (err) {
    return res.status(404).json({ message: "User not found" });
  }
  if (user >= 1) res.json({ message: "User deleted successfully!" });
  else res.status(400).json({ message: "Deletion not successfully" });
};

module.exports = {
  getALl,
  createOne,
  getOne,
  updateById,
  deleteOne,
};
