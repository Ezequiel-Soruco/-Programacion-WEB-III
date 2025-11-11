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

//--------------------------------------async/await-----------------------------------------
// Funciones reescritas para devolver promesas
/*function obtenerProductos() {
  return new Promise(resolve => {
    setTimeout(() => {
      const productos = [
        { id: 'p1', 
            nombre: 'Laptop' 
        },
        { id: 'p2', 
            nombre: 'Mouse' 
        }
      ];
      console.log("-> Productos obtenidos.");
      resolve(productos);
    }, 1000);
  });
}

function obtenerResenas(idProducto) {
  return new Promise(resolve => {
    setTimeout(() => {
      const resenas = ['Excelente producto', 'Muy rápido.', 'Buena calidad.'];
      console.log("-> Reseñas obtenidas.");
      resolve(resenas);
    }, 1000);
  });
}

// Función asíncrona que coordina las operaciones
async function procesarDatos() {
  try {
    const productos = await obtenerProductos();
    const productoId = productos[0].id;
    const resenas = await obtenerResenas(productoId);
    
    console.log("-------------------");
    console.log("Proceso completado.");
    console.log(`Reseñas para el producto ${productoId}: ${resenas.join(', ')}`);
    
  } catch (error) {
    console.log("error:", error);
  }
}

procesarDatos();*/