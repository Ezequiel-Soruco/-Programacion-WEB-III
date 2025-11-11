
function obtenerDatosConCallback(callback) {
  
  setTimeout(() => {
    const exito = true; 
    if (exito) {
      const datos = { id: 1, mensaje: "Datos obtenidos del servidor." };
      
      callback(null, datos); 
    } else {
      callback(new Error("Error de conexión."), null);
    }
  }, 1000);
}


function obtenerDatosPromesa() {
  return new Promise((resolve, reject) => {
    
    obtenerDatosConCallback((error, resultado) => {
      if (error) {
        
        reject(error);
      } else {
        
        resolve(resultado);
      }
    });
  });
}

// Usamos la nueva función basada en promesas
obtenerDatosPromesa()
  .then((datos) => {
    console.log("¡Promesa exitosa! Datos recibidos:", datos);
  })
  .catch((error) => {
    console.error("¡Promesa fallida! Hubo un error:", error.message);
  });