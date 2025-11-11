import express from 'express';
import { InsertarProductos,MostrarProductos,MostrarProducto,ActualizarProductos,PatchStock} from '../controller/ProductosController.js';

const Router = express.Router();

Router.post('/', InsertarProductos); // Ej. 6 POST /productos
Router.get('/', MostrarProductos);   // Ej. 7 GET /productos (este ejercicio)
Router.get('/:id', MostrarProducto); // Ej.8 NUEVO: GET /productos/:id
Router.put('/:id', ActualizarProductos);   // Ej. 9 PUT /productos/:id
Router.patch('/:id/stock', PatchStock);   // Ej.10 PATCH /productos/:id/stock
export default Router;
