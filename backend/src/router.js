const express = require('express');

const router = express.Router();

const userController = require('./controllers/userController');
const userMiddleware = require('./middlewares/userMiddleware');

router.get('/', (req, res) => res.status(200).send('Backend rodando!'));
router.get('/usuarios', userController.getUsers);
router.post('/criarUsuario', userMiddleware.validateUser, userController.createUser);
router.delete('/deletarUsuario/:idusuario', userController.deleteUser);

module.exports = router;