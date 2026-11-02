const Detalle = require('../models/detalle_model');

// Obtener todos los detalles
const obtenerDetalles = async (req, res) => {
    try {
        const detalles = await Detalle.obtenerTodos();
        res.json(detalles);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

// Obtener detalle por ID
const obtenerDetallePorId = async (req, res) => {
    try {
        const detalle = await Detalle.obtenerPorId(req.params.id);

        if (!detalle) {
            return res.status(404).json({ mensaje: 'Detalle no encontrado' });
        }

        res.json(detalle);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

// Crear detalle
const crearDetalle = async (req, res) => {
    try {
        const nuevoDetalle = await Detalle.crear(req.body);
        res.status(201).json(nuevoDetalle);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};

// Actualizar detalle
const actualizarDetalle = async (req, res) => {
    try {
        const detalle = await Detalle.actualizar(req.params.id, req.body);

        if (!detalle) {
            return res.status(404).json({ mensaje: 'Detalle no encontrado' });
        }

        res.json(detalle);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};

// Eliminar detalle
const eliminarDetalle = async (req, res) => {
    try {
        const detalle = await Detalle.eliminar(req.params.id);

        if (!detalle) {
            return res.status(404).json({ mensaje: 'Detalle no encontrado' });
        }

        res.json({ mensaje: 'Detalle eliminado correctamente' });
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};

module.exports = {
    obtenerDetalles,
    obtenerDetallePorId,
    crearDetalle,
    actualizarDetalle,
    eliminarDetalle
};