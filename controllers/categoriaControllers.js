const Categoria = require('../models/categoriaModel');

// Obtener todas las categorías
const obtenerCategorias = async (req, res) => {
    try {
        const categorias = await Categoria.obtenerTodas();
        res.json(categorias);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

// Obtener una categoría por ID
const obtenerCategoriaPorId = async (req, res) => {
    try {
        const categoria = await Categoria.obtenerPorId(req.params.id);

        if (!categoria) {
            return res.status(404).json({
                mensaje: 'Categoría no encontrada'
            });
        }

        res.json(categoria);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

// Crear una categoría
const crearCategoria = async (req, res) => {
    try {
        const nuevaCategoria = await Categoria.crear(req.body);
        res.status(201).json(nuevaCategoria);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};

// Actualizar una categoría
const actualizarCategoria = async (req, res) => {
    try {
        const categoria = await Categoria.actualizar(
            req.params.id,
            req.body
        );

        if (!categoria) {
            return res.status(404).json({
                mensaje: 'Categoría no encontrada'
            });
        }

        res.json(categoria);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};

// Eliminar una categoría
const eliminarCategoria = async (req, res) => {
    try {
        const categoria = await Categoria.eliminar(req.params.id);

        if (!categoria) {
            return res.status(404).json({
                mensaje: 'Categoría no encontrada'
            });
        }

        res.json({
            mensaje: 'Categoría eliminada correctamente'
        });
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};

module.exports = {
    obtenerCategorias,
    obtenerCategoriaPorId,
    crearCategoria,
    actualizarCategoria,
    eliminarCategoria
};