
const db = require('../config/database');

const obtenerTodos = async () => {
    const r = await db.query('SELECT * FROM categorias ORDER BY id_categoria');
    return r.rows;
};

const obtenerPorId = async (id) => {
    const r = await db.query('SELECT * FROM categorias WHERE id_categoria = $1', [id]);
    return r.rows[0];
};

const crear = async (d) => {
    const r = await db.query(
        'INSERT INTO categorias (nombre, descripcion, activo) VALUES ($1,$2,$3) RETURNING *',
        [d.nombre, d.descripcion, d.activo ?? true]
    );
    return r.rows[0];
};

const actualizar = async (id, d) => {
    const r = await db.query(
        'UPDATE categorias SET nombre=$1, descripcion=$2, activo=$3 WHERE id_categoria=$4 RETURNING *',
        [d.nombre, d.descripcion, d.activo, id]
    );
    return r.rows[0];
};

const eliminar = async (id) => {
    const r = await db.query('DELETE FROM categorias WHERE id_categoria=$1 RETURNING *', [id]);
    return r.rows[0];
};

module.exports = { obtenerTodos, obtenerPorId, crear, actualizar, eliminar };

