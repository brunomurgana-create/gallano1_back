# Galano Muebles – Backend

Backend del sitio web comercial de **Galano Muebles**, desarrollado como proyecto académico de 6.º año de Programación.

## Descripción del proyecto

Este proyecto consiste en el desarrollo de una API REST para administrar la información y las operaciones comerciales de Galano Muebles.

El sistema permite gestionar clientes, categorías, productos, pedidos, detalles de pedidos y pagos.

## Tecnologías utilizadas

- **Node.js:** entorno de ejecución de JavaScript.
- **Express.js:** framework para crear el servidor y las rutas.
- **PostgreSQL:** sistema de gestión de bases de datos...

- **node-postgres (pg):** conexión entre Node.js y PostgreSQL.
- **dotenv:** gestión de variables de entorno.
- **cors:** configuración del acceso desde otros orígenes.

## Estructura del proyecto

```text
galeano1_back/
│
├── config/
│   └── database.js
│
├── controllers/
│   ├── categoriaControllers.js
│   ├── clienteControllers.js
│   ├── detalle_Controller.js
│   ├── pagoControllers.js
│   ├── pedidoController.js
│   └── productoControllers.js
│
├── models/
│   ├── categoriaModel.js
│   ├── clienteModel.js
│   ├── detalle_model.js
│   ├── pagoModel.js
│   ├── pedidoModel.js
│   └── productoModel.js
│
├── routes/
│   ├── categoriaroute.js
│   ├── cliente_route.js
│   ├── detalle_route.js
│   ├── pagoroute.js
│   ├── pedidoroute.js
│   └── productoroute.js
│
├── .env
├── .gitignore
├── App.js
├── package.json
├── package-lock.json
├── README.md
└── server.js
```

## Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/brunomurgana-create/gallano1_back.git
```

2. Ingresar a la carpeta:

```bash
cd gallano1_back
```

3. Instalar las dependencias:

```bash
npm install
```

4. Crear un archivo `.env` en la raíz del proyecto y configurar los datos de conexión:

```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=galano
DB_USER=postgres
DB_PASSWORD=TU_CONTRASEÑA
PORT=3000
```

**Importante:** reemplazar `TU_CONTRASEÑA` por la contraseña local de PostgreSQL. No compartir ni subir el archivo `.env` a GitHub.

## Ejecución

Para iniciar el servidor:

```bash
node server.js
```

Si se utiliza Nodemon:

```bash
npx nodemon server.js
```

El servidor estará disponible en:

```text
http://localhost:3000
```

## Endpoints de la API

| Recurso | Ruta |
|---|---|
| Categorías | `/api/categorias` |
| Clientes | `/api/clientes` |
| Productos | `/api/productos` |
| Pedidos | `/api/pedidos` |
| Detalles | `/api/detalles` |
| Pagos | `/api/pagos` |

Cada recurso contempla operaciones para consultar, crear, modificar y eliminar registros.

## Base de datos

La base de datos utilizada se llama `galano` y está desarrollada en PostgreSQL.

Contiene las siguientes tablas:

- `categorias`
- `clientes`
- `productos`
- `pedidos`
- `detalle_pedido`
- `pagos`

## Arquitectura

El backend utiliza el patrón **Modelo-Vista-Controlador (MVC)**:

- **Models:** interactúan con la base de datos.
