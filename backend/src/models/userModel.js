const connection = require ('./connection');
connection.connect();

const getUsers = async () => {
    const users = await connection.query('SELECT * FROM USUARIO');

    return users.rows;
};

const createUser = async (userCreate) => {
    const {nome, email, senha, dataNascimento} = userCreate;
    const dateUTC = new Date(Date.now());

    const createUser = await connection.query('INSERT INTO USUARIO(NOME, EMAIL, SENHA, DATANASCIMENTO, DATACADASTRO) VALUES ($1, $2, $3, $4, $5) RETURNING *', [nome, email, senha, dataNascimento, dateUTC]);

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