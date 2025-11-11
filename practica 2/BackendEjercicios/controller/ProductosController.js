import { InsertarProducto,ObtenerProductos,ObtenerProductoPorId,ActualizarProducto,PatchStockProducto} from '../model/ProductosModel.js';

export const InsertarProductos = async (req, res) => {
  try {
    const resultado = await InsertarProducto(req.body);
    res.status(200).json(resultado);
  } catch (error) {
    console.error(error);
  }
};
export const MostrarProductos = async ( req, res) => {
  try {
    const resultado = await ObtenerProductos();
    res.status(200).json(resultado); // JSON con productos + nombre de categoría
  } catch (error) {
    console.error(error);
  }
};
export const MostrarProducto = async (req, res) => {
  try {
    const r = await ObtenerProductoPorId(req.params.id);
    if (!r) return res.status(404).json({ message: 'No encontrado' });
    res.status(200).json(r);
  } catch (error) {
    console.error(error);
  }
};
export const ActualizarProductos = async (req, res) => {
  try {
    const { id } = req.params;
    const r = await ActualizarProducto(id, req.body);
    res.status(r.updated ? 200 : 404).json(r);
  } catch (error) {
    console.error(error);
  }
};
export const PatchStock = async (req, res) => {
  try {
    const { id } = req.params;
    const { cantidad } = req.body; // puede ser positivo o negativo
    const r = await PatchStockProducto(id, cantidad);
    res.status(r.updated ? 200 : 404).json(r);
  } catch (error) {
    console.error(error);
  }
};

