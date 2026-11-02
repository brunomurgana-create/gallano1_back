
const db = require('../config/database');

const obtenerTodos = async () => {
    const r = await db.query('SELECT * FROM clientes ORDER BY id_cliente');
    return r.rows;
};

const obtenerPorId = async (id) => {
    const r = await db.query('SELECT * FROM clientes WHERE id_cliente=$1', [id]);
    return r.rows[0];
};

const crear = async (d) => {
    const r = await db.query(
        `INSERT INTO clientes
        (nombre, apellido, email, telefono, direccion, ciudad, codigo_postal)
        VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *`,
        [d.nombre, d.apellido, d.email, d.telefono,
         d.direccion, d.ciudad, d.codigo_postal]
    );
    return r.rows[0];
};

const actualizar = async (id, d) => {
    const r = await db.query(
        `UPDATE clientes SET nombre=$1, apellido=$2, email=$3,
         telefono=$4, direccion=$5, ciudad=$6, codigo_postal=$7
         WHERE id_cliente=$8 RETURNING *`,
        [d.nombre, d.apellido, d.email, d.telefono,
         d.direccion, d.ciudad, d.codigo_postal, id]
    );
    return r.rows[0];
};

const eliminar = async (id) => {
    const r = await db.query('DELETE FROM clientes WHERE id_cliente=$1 RETURNING *', [id]);
    return r.rows[0];
};

module.exports = { obtenerTodos, obtenerPorId, crear, actualizar, eliminar };
