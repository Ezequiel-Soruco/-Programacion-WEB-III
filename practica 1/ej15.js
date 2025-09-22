
function obtenerDatosConCallback(callback) {
  
  setTimeout(() => {
    const exito = true; 
    if (exito) {
      const datos = { id: 1, mensaje: "Datos obtenidos" };
      
      callback(null, datos); 
    } else {
      callback(new Error("Error"), null);
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
    console.log(" Datos recibidos:", datos);
  })
  .catch((error) => {
    console.error(" Hubo un error:", error.message);
  });