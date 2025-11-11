import { crearCategoria,listarCategorias,obtenerCategoriaConProductos,actualizarCategoria,eliminarCategoria} from '../model/CategoriasModel.js';
//1
export const postCategoria = async (req, res) => {
  try {
    const r = await crearCategoria(req.body);
    res.status(201).json(r); // { id, message }
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Error' });
  }
};
//2
export const getCategorias = async (_req, res) => {
  try {
    const r = await listarCategorias();
    res.status(200).json(r);              // ← retorna JSON
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Error' });
  }
};

//3
export const getCategoriaPorId = async (req, res) => {
  try {
    const data = await obtenerCategoriaConProductos(req.params.id);
    if (!data) return res.status(404).json({ message: 'No encontrada' });
    res.status(200).json(data);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Error' });
  }
};
//4

export const putCategoria = async (req, res) => {
  try {
    const r = await actualizarCategoria(req.params.id, req.body);
    res.status(r.updated ? 200 : 404).json(r);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Error' });
  }
};
//5
export const deleteCategoria = async (req, res) => {
  try {
    const r = await eliminarCategoria(req.params.id);
    res.status(r.deleted ? 200 : 404).json(r);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Error' });
  }
};