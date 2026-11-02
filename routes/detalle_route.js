const express = require('express');
const router = express.Router();

const detalleController = require('../controllers/detalle_Controller');

// Obtener todos los detalles
router.get('/', detalleController.obtenerDetalles);

// Obtener un detalle por ID
router.get('/:id', detalleController.obtenerDetallePorId);

// Crear un detalle
router.post('/', detalleController.crearDetalle);

// Actualizar un detalle
router.put('/:id', detalleController.actualizarDetalle);

// Eliminar un detalle
router.delete('/:id', detalleController.eliminarDetalle);

module.exports = router;