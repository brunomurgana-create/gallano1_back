const express = require('express');
const router = express.Router();

const pedidoController = require('../controllers/pedidoController');

// Obtener todos los pedidos
router.get('/', pedidoController.obtenerPedidos);

// Obtener un pedido por ID
router.get('/:id', pedidoController.obtenerPedidoPorId);

// Crear un pedido
router.post('/', pedidoController.crearPedido);

// Actualizar un pedido
router.put('/:id', pedidoController.actualizarPedido);

// Eliminar un pedido
router.delete('/:id', pedidoController.eliminarPedido);

module.exports = router;