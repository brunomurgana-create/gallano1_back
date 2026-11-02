
const db = require('../config/database');

const obtenerTodos = async () => {
    const r = await db.query(`
        SELECT d.*, p.nombre AS producto
        FROM detalle_pedido d
        JOIN productos p ON d.id_producto = p.id_producto
        ORDER BY d.id_detalle
    `);
    return r.rows;
};

const obtenerPorId = async (id) => {
    const r = await db.query(
        'SELECT * FROM detalle_pedido WHERE id_detalle=$1', [id]
    );
    return r.rows[0];
};

const crear = async (d) => {
    const r = await db.query(
        `INSERT INTO detalle_pedido
        (id_pedido, id_producto, cantidad, precio_unitario)
        VALUES ($1,$2,$3,$4) RETURNING *`,
        [d.id_pedido, d.id_producto, d.cantidad, d.precio_unitario]
    );
    return r.rows[0];
};

const actualizar = async (id, d) => {
    const r = await db.query(
        `UPDATE detalle_pedido SET id_pedido=$1, id_producto=$2,
         cantidad=$3, precio_unitario=$4
         WHERE id_detalle=$5 RETURNING *`,
        [d.id_pedido, d.id_producto, d.cantidad,
         d.precio_unitario, id]
    );
    return r.rows[0];
};

const eliminar = async (id) => {
    const r = await db.query(
        'DELETE FROM detalle_pedido WHERE id_detalle=$1 RETURNING *', [id]
    );
    return r.rows[0];
};

module.exports = { obtenerTodos, obtenerPorId, crear, actualizar, eliminar };

