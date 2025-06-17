const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');
const authenticate = require('../middlewares/authMiddleware');

// Endpoints protegidos
router.post('/', authenticate, itemController.criarItem);
router.get('/', authenticate, itemController.listarItens);
router.put('/:id', authenticate, itemController.atualizarItem);
router.delete('/:id', authenticate, itemController.deletarItem);

module.exports = router;
