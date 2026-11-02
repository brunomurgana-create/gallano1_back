require('dotenv').config();

const app = require('./app');
const db = require('./config/database');

const PORT = process.env.PORT || 3000;

async function iniciarServidor() {
    try {
        await db.query('SELECT NOW()');

        console.log('Conexion a PostgreSQL exitosa');

        app.listen(PORT, () => {
            console.log(`Servidor iniciado en http://localhost:${PORT}`);
        });

    } catch (error) {
        console.error('Error al conectar con PostgreSQL:', error.message);
    }
}

iniciarServidor();