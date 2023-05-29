const connection = require ('./connection');
connection.connect();

const getUsers = async () => {
    const users = await connection.query('SELECT * FROM USUARIO');

    return users.rows;
};

const createUser = async (userCreate) => {
    const {user, password} = userCreate;
    const dateUTC = new Date(Date.now()).toUTCString();

    const createUser = await connection.query('INSERT INTO USUARIO (USUARIO, SENHA, DATACADASTRO) VALUES ($1, $2, $3) RETURNING *', [user, password, dateUTC]);

    return createUser;
};

const deleteUser = async (userId) => {
    const deleteUser = await connection.query('DELETE FROM USUARIO WHERE IDUSUARIO = '+userId);

    return deleteUser;
};

module.exports = {
    getUsers,
    createUser,
    deleteUser
};