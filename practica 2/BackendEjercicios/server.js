import express from 'express';
import CategoriasRouter from './routes/CategoriasRoute.js';
import ProductosRouter from './routes/ProductosRoute.js';

const app = express();
app.use(express.json());

app.use('/categorias', CategoriasRouter);
app.use('/productos', ProductosRouter);

const PORT = 3005;
app.listen(PORT, () => console.log(`Corriendo en http://localhost:${PORT}`));
