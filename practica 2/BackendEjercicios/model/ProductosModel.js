import { db } from '../config/db.js';
//6 POST 
export const InsertarProducto = async (producto) => {
  const { nombre, precio, stock, categoria_id } = producto;
  await db.query(
    'INSERT INTO productos (nombre, precio, stock, categoria_id) VALUES (?, ?, ?, ?)',
    [nombre, precio, stock, categoria_id]
  );
  return { message: 'Se inserto correctamente' };
};
// 7 GET 
export const ObtenerProductos = async () => {
  const [rows] = await db.query(
    `SELECT
       p.id, p.nombre, p.precio, p.stock, p.categoria_id,
       c.nombre AS categoria
     FROM productos p
     INNER JOIN categorias c ON c.id = p.categoria_id
     ORDER BY p.id DESC`
  );
  return rows; // arreglo de productos con "categoria"
};
//8 GET id
export const ObtenerProductoPorId = async (id) => {
  const [rows] = await db.query(
    `SELECT
       p.id, p.nombre, p.precio, p.stock, p.categoria_id,
       c.nombre AS categoria
     FROM productos p
     INNER JOIN categorias c ON c.id = p.categoria_id
     WHERE p.id = ?`,
    [id]
  );
  return rows[0] || null;
};
//9 PUT 
export const ActualizarProducto = async (id, { nombre, precio, stock, categoria_id }) => {
  const [res] = await db.query(
    `UPDATE productos
     SET nombre = ?, precio = ?, stock = ?, categoria_id = ?, fecha_act = NOW()
     WHERE id = ?`,
    [nombre, precio, stock, categoria_id, id]
  );
  return {
    updated: res.affectedRows > 0,
    message: res.affectedRows ? 'Producto actualizado' : 'No encontrado'
  };
};
// 10 PATCH
export const PatchStockProducto = async (id, cantidad) => {
  const [res] = await db.query(
    'UPDATE productos SET stock = stock + ?, fecha_act = NOW() WHERE id = ?',
    [cantidad, id]
  );
  return {
    updated: res.affectedRows > 0,
    message: res.affectedRows ? 'Stock actualizado' : 'No encontrado'
  };
};