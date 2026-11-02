
const db = require('../config/database');

const obtenerTodos = async () => {
    const r = await db.query(`
        SELECT pa.*, pe.id_cliente
        FROM pagos pa
        JOIN pedidos pe ON pa.id_pedido = pe.id_pedido
        ORDER BY pa.id_pago
    `);
    return r.rows;
};

const obtenerPorId = async (id) => {
    const r = await db.query(
        'SELECT * FROM pagos WHERE id_pago=$1', [id]
    );
    return r.rows[0];
};

const crear = async (d) => {
    const r = await db.query(
        `INSERT INTO pagos
        (id_pedido, importe, metodo_pago, estado, referencia)
        VALUES ($1,$2,$3,$4,$5) RETURNING *`,
        [d.id_pedido, d.importe, d.metodo_pago,
         d.estado || 'pendiente', d.referencia]
    );
    return r.rows[0];
};

const actualizar = async (id, d) => {
    const r = await db.query(
        `UPDATE pagos SET id_pedido=$1, importe=$2,
         metodo_pago=$3, estado=$4, referencia=$5
         WHERE id_pago=$6 RETURNING *`,
        [d.id_pedido, d.importe, d.metodo_pago,
         d.estado, d.referencia, id]
    );
    return r.rows[0];
};

const eliminar = async (id) => {
    const r = await db.query(
        'DELETE FROM pagos WHERE id_pago=$1 RETURNING *', [id]
    );
    return r.rows[0];
};

module.exports = { obtenerTodos, obtenerPorId, crear, actualizar, eliminar };
