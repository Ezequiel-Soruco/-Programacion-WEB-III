// Paso 1: Una función que devuelve una promesa (la base)
function obtenerDatosPromesa() {
  return new Promise((resolve, reject) => {
   
    setTimeout(() => {
      const datos = { id: 1, mensaje: "Datos obtenidos de la API." };
      resolve(datos);
    
    }, 1000);
  });
}



function obtenerDatosConCallback(callback) {
  obtenerDatosPromesa()
    .then((datos) => {
     
      callback(null, datos);
    })
    .catch((error) => {
     
      callback(error, null);
    });
}


obtenerDatosConCallback((error, resultado) => {
  if (error) {
    console.error("Hubo un error:", error.message);
  } else {
    console.log("Datos recibidos correctamente:", resultado);
  }
});