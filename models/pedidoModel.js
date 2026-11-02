
const db = require('../config/database');

const obtenerTodos = async () => {
    const r = await db.query(`
        SELECT p.*, c.nombre, c.apellido
        FROM pedidos p
        JOIN clientes c ON p.id_cliente = c.id_cliente
        ORDER BY p.id_pedido
    `);
    return r.rows;
};

const obtenerPorId = async (id) => {
    const r = await db.query(
        'SELECT * FROM pedidos WHERE id_pedido=$1', [id]
    );
    return r.rows[0];
};

const crear = async (d) => {
    const r = await db.query(
        `INSERT INTO pedidos
        (id_cliente, estado, direccion_entrega, observaciones, total)
        VALUES ($1,$2,$3,$4,$5) RETURNING *`,
        [d.id_cliente, d.estado || 'pendiente',
         d.direccion_entrega, d.observaciones, d.total ?? 0]
    );
    return r.rows[0];
};

const actualizar = async (id, d) => {
    const r = await db.query(
        `UPDATE pedidos SET id_cliente=$1, estado=$2,
         direccion_entrega=$3, observaciones=$4, total=$5
         WHERE id_pedido=$6 RETURNING *`,
        [d.id_cliente, d.estado, d.direccion_entrega,
         d.observaciones, d.total, id]
    );
    return r.rows[0];
};

const eliminar = async (id) => {
    const r = await db.query(
        'DELETE FROM pedidos WHERE id_pedido=$1 RETURNING *', [id]
    );
    return r.rows[0];
};

module.exports = { obtenerTodos, obtenerPorId, crear, actualizar, eliminar };
