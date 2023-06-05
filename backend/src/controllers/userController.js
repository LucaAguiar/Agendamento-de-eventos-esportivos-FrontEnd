const userModel = require('../models/userModel');

const getUsers = async (req, res) => {
    const users = await userModel.getUsers();

    return res.status(200).json(users);
};

const createUser = async (req, res) => {
    const createUser = await userModel.createUser(req.body);

    return res.status(201).json(createUser.rows[0]);
};

const deleteUser = async (req, res) => {
    await userModel.deleteUser(req.params.idusuario);

    return res.status(204).json();
};

module.exports = {
    getUsers,
    createUser,
    deleteUser
};