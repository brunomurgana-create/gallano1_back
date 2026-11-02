
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Importación de rutas
const categoriaRoute = require('./routes/categoriaroute');
const clienteRoute = require('./routes/cliente_route');
const productoRoute = require('./routes/productoroute');
const pedidoRoute = require('./routes/pedidoroute');
const detalleRoute = require('./routes/detalle_route');
const pagoRoute = require('./routes/pagoroute');

// Uso de rutas
app.use('/api/categorias', categoriaRoute);
app.use('/api/clientes', clienteRoute);
app.use('/api/productos', productoRoute);
app.use('/api/pedidos', pedidoRoute);
app.use('/api/detalles', detalleRoute);
app.use('/api/pagos', pagoRoute);

module.exports = app;
