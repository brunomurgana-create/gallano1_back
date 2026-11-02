const Producto = require('../models/productoModel');

// Obtener todos los productos
const obtenerProductos = async (req, res) => {
    try {
        const productos = await Producto.obtenerTodos();
        res.json(productos);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

// Obtener producto por ID
const obtenerProductoPorId = async (req, res) => {
    try {
        const producto = await Producto.obtenerPorId(req.params.id);

        if (!producto) {
            return res.status(404).json({ mensaje: 'Producto no encontrado' });
        }

        res.json(producto);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

// Crear producto
const crearProducto = async (req, res) => {
    try {
        const nuevoProducto = await Producto.crear(req.body);
        res.status(201).json(nuevoProducto);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};

// Actualizar producto
const actualizarProducto = async (req, res) => {
    try {
        const producto = await Producto.actualizar(req.params.id, req.body);

        if (!producto) {
            return res.status(404).json({ mensaje: 'Producto no encontrado' });
        }

        res.json(producto);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};

// Eliminar producto
const eliminarProducto = async (req, res) => {
    try {
        const producto = await Producto.eliminar(req.params.id);

        if (!producto) {
            return res.status(404).json({ mensaje: 'Producto no encontrado' });
        }

        res.json({ mensaje: 'Producto eliminado correctamente' });
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};

module.exports = {
    obtenerProductos,
    obtenerProductoPorId,
    crearProducto,
    actualizarProducto,
    eliminarProducto
};