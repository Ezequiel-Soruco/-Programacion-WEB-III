import express from 'express';
import { postCategoria, getCategorias, getCategoriaPorId,putCategoria,deleteCategoria} from '../controller/CategoriasController.js';

const Router = express.Router();

Router.post('/', postCategoria);   // Ej. 1
Router.get('/', getCategorias);    // Ej. 2
Router.get('/:id', getCategoriaPorId); // Ej. 3  <-- agrega esta línea
Router.put('/:id', putCategoria);  //  Ej. 4 PUT /categorias/:id
Router.delete('/:id', deleteCategoria);   // Ej. 5 DELETE /categorias/:id
export default Router;
