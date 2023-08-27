const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user_controller');
const auth = require('../middlewares/auth');

// routes CRUD disponibles
router.get('/', [auth], userCtrl.getUserList);
router.get('/:id', [auth], userCtrl.getUser);
router.post('/signup', userCtrl.createUser);
router.post('/signin', userCtrl.login);
router.put('/:id', [auth], userCtrl.updateUser);
router.delete('/:id', [auth], userCtrl.deleteUser);

module.exports = router;