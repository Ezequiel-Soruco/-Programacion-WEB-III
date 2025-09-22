//------------------------ejemplo concreto donde el anidamiento de callbacks----------------------------------
// Funciones que usan callbacks
function obtenerProductos(callback) {
  setTimeout(() => {
    const productos = [
      { id: 'p1', nombre: 'Laptop' },
      { id: 'p2', nombre: 'Mouse' }
    ];
    console.log("-> Productos obtenidos.");
    callback(productos);
  }, 1000);
}

function obtenerResenas(idProducto, callback) {
  setTimeout(() => {
    const resenas = ['Excelente producto!', 'Muy rápido.', 'Buena calidad.'];
    console.log("-> Reseñas obtenidas.");
    callback(resenas);
  }, 1000);
}


obtenerProductos(lista => {
  const productoId = lista[0].id; 
  obtenerResenas(productoId, resenas => {
    console.log("-------------------");
    console.log("Proceso completado.");
    console.log(`Reseñas para el producto ${productoId}: ${resenas.join(', ')}`);
  });
});

