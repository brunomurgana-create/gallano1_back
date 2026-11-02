const Pago = require('../models/pagoModel');

// Obtener todos los pagos
const obtenerPagos = async (req, res) => {
    try {
        const pagos = await Pago.obtenerTodos();
        res.json(pagos);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

// Obtener pago por ID
const obtenerPagoPorId = async (req, res) => {
    try {
        const pago = await Pago.obtenerPorId(req.params.id);

        if (!pago) {
            return res.status(404).json({ mensaje: 'Pago no encontrado' });
        }

        res.json(pago);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

// Crear pago
const crearPago = async (req, res) => {
    try {
        const nuevoPago = await Pago.crear(req.body);
        res.status(201).json(nuevoPago);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};

// Actualizar pago
const actualizarPago = async (req, res) => {
    try {
        const pago = await Pago.actualizar(req.params.id, req.body);

        if (!pago) {
            return res.status(404).json({ mensaje: 'Pago no encontrado' });
        }

        res.json(pago);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};

// Eliminar pago
const eliminarPago = async (req, res) => {
    try {
        const pago = await Pago.eliminar(req.params.id);

        if (!pago) {
            return res.status(404).json({ mensaje: 'Pago no encontrado' });
        }

        res.json({ mensaje: 'Pago eliminado correctamente' });
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};

module.exports = {
    obtenerPagos,
    obtenerPagoPorId,
    crearPago,
    actualizarPago,
    eliminarPago
};