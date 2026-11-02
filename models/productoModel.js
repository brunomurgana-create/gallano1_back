const db = require('../config/database');

// Obtener todos los productos
const obtenerTodos = async () => {
    const consulta = `
        SELECT *
        FROM productos
        ORDER BY id_producto ASC
    `;

    const resultado = await db.query(consulta);
    return resultado.rows;
};

// Obtener un producto por su ID
const obtenerPorId = async (id) => {
    const consulta = `
        SELECT *
        FROM productos
        WHERE id_producto = $1
    `;

    const resultado = await db.query(consulta, [id]);
    return resultado.rows[0];
};

// Crear un producto
const crear = async (producto) => {
    const {
        nombre,
        descripcion,
        precio,
        stock,
        material,
        color,
        dimensiones,
        imagen_url,
        id_categoria,
        activo
    } = producto;

    const consulta = `
        INSERT INTO productos (
            nombre,
            descripcion,
            precio,
            stock,
            material,
            color,
            dimensiones,
            imagen_url,
            id_categoria,
            activo
        )
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
        RETURNING *
    `;

    const valores = [
        nombre,
        descripcion,
        precio,
        stock,
        material,
        color,
        dimensiones,
        imagen_url,
        id_categoria,
        activo
    ];

    const resultado = await db.query(consulta, valores);
    return resultado.rows[0];
};

// Actualizar un producto
const actualizar = async (id, producto) => {
    const {
        nombre,
        descripcion,
        precio,
        stock,
        material,
        color,
        dimensiones,
        imagen_url,
        id_categoria,
        activo
    } = producto;

    const consulta = `
        UPDATE productos
        SET
            nombre = $1,
            descripcion = $2,
            precio = $3,
            stock = $4,
            material = $5,
            color = $6,
            dimensiones = $7,
            imagen_url = $8,
            id_categoria = $9,
            activo = $10,
            actualizado_en = CURRENT_TIMESTAMP
        WHERE id_producto = $11
        RETURNING *
    `;

    const valores = [
        nombre,
        descripcion,
        precio,
        stock,
        material,
        color,
        dimensiones,
        imagen_url,
        id_categoria,
        activo,
        id
    ];

    const resultado = await db.query(consulta, valores);
    return resultado.rows[0];
};

// Eliminar un producto
const eliminar = async (id) => {
    const consulta = `
        DELETE FROM productos
        WHERE id_producto = $1
        RETURNING *
    `;

    const resultado = await db.query(consulta, [id]);
    return resultado.rows[0];
};

module.exports = {
    obtenerTodos,
    obtenerPorId,
    crear,
    actualizar,
    eliminar
};