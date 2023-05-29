const express = require('express');

const router = express.Router();

const userController = require('./controllers/userController');
const userMiddleware = require('./middlewares/userMiddleware');

router.get('/', (req, res) => res.status(200).send('Backend rodando!'));
router.get('/getUsers', userController.getUsers);
router.post('/createUser', userMiddleware.validateUser, userController.createUser);
router.delete('/deleteUser/:iduser', userController.deleteUser);

module.exports = router;