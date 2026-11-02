const Pedido = require('../models/pedidoModel');

// Obtener todos los pedidos
const obtenerPedidos = async (req, res) => {
    try {
        const pedidos = await Pedido.obtenerTodos();
        res.json(pedidos);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

// Obtener pedido por ID
const obtenerPedidoPorId = async (req, res) => {
    try {
        const pedido = await Pedido.obtenerPorId(req.params.id);

        if (!pedido) {
            return res.status(404).json({ mensaje: 'Pedido no encontrado' });
        }

        res.json(pedido);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

// Crear pedido
const crearPedido = async (req, res) => {
    try {
        const nuevoPedido = await Pedido.crear(req.body);
        res.status(201).json(nuevoPedido);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};

// Actualizar pedido
const actualizarPedido = async (req, res) => {
    try {
        const pedido = await Pedido.actualizar(req.params.id, req.body);

        if (!pedido) {
            return res.status(404).json({ mensaje: 'Pedido no encontrado' });
        }

        res.json(pedido);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};

// Eliminar pedido
const eliminarPedido = async (req, res) => {
    try {
        const pedido = await Pedido.eliminar(req.params.id);

        if (!pedido) {
            return res.status(404).json({ mensaje: 'Pedido no encontrado' });
        }

        res.json({ mensaje: 'Pedido eliminado correctamente' });
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};

module.exports = {
    obtenerPedidos,
    obtenerPedidoPorId,
    crearPedido,
    actualizarPedido,
    eliminarPedido
};