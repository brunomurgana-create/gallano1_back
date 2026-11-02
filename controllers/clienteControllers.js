const Cliente = require('../models/clienteModel');

// Obtener todos los clientes
const obtenerClientes = async (req, res) => {
    try {
        const clientes = await Cliente.obtenerTodos();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

// Obtener cliente por ID
const obtenerClientePorId = async (req, res) => {
    try {
        const cliente = await Cliente.obtenerPorId(req.params.id);

        if (!cliente) {
            return res.status(404).json({ mensaje: 'Cliente no encontrado' });
        }

        res.json(cliente);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

// Crear cliente
const crearCliente = async (req, res) => {
    try {
        const nuevoCliente = await Cliente.crear(req.body);
        res.status(201).json(nuevoCliente);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};

// Actualizar cliente
const actualizarCliente = async (req, res) => {
    try {
        const cliente = await Cliente.actualizar(req.params.id, req.body);

        if (!cliente) {
            return res.status(404).json({ mensaje: 'Cliente no encontrado' });
        }

        res.json(cliente);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};

// Eliminar cliente
const eliminarCliente = async (req, res) => {
    try {
        const cliente = await Cliente.eliminar(req.params.id);

        if (!cliente) {
            return res.status(404).json({ mensaje: 'Cliente no encontrado' });
        }

        res.json({ mensaje: 'Cliente eliminado correctamente' });
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};

module.exports = {
    obtenerClientes,
    obtenerClientePorId,
    crearCliente,
    actualizarCliente,
    eliminarCliente
};