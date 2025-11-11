import { db } from '../config/db.js';
//POST EJ 1
export const crearCategoria = async ({ nombre, descripcion }) => {
  const [res] = await db.query(
    'INSERT INTO categorias (nombre, descripcion) VALUES (?, ?)',
    [nombre, descripcion]
  );
  return { id: res.insertId, message: 'Categoria creada' };
};
//GET EJ 2
export const listarCategorias = async () => {
  const [rows] = await db.query('SELECT * FROM categorias ORDER BY id DESC');
  return rows; // arreglo de categorías
};
//GET EJ 3
export const obtenerCategoriaConProductos = async (id) => {
  const [[categoria]] = await db.query('SELECT * FROM categorias WHERE id = ?', [id]);
  if (!categoria) return null;

  const [productos] = await db.query(
    'SELECT * FROM productos WHERE categoria_id = ? ORDER BY id DESC',
    [id]
  );

  return { categoria, productos }; // objeto con la cat y su lista de productos
};

//PUT EJ 4 (averiguar)


export const actualizarCategoria = async (id, { nombre, descripcion }) => {
  const [res] = await db.query(
    'UPDATE categorias SET nombre = ?, descripcion = ?, fecha_act = NOW() WHERE id = ?',
    [nombre, descripcion, id]
  );
  return { updated: !!res.affectedRows, message: res.affectedRows ? 'Categoria actualizada' : 'No encontrada' };
};
//DELETE EJ 5 
export const eliminarCategoria = async (id) => {
  const [res] = await db.query('DELETE FROM categorias WHERE id = ?', [id]);
  return {
    deleted: res.affectedRows > 0,
    message: res.affectedRows ? 'Categoria eliminada' : 'No encontrada'
  };
};
