// -----------------CALLBACK--------------------------------
//Es conveniente usar un callback cuando:
//La operación es sencilla y única, como un simple setTimeout.
//El código no requiere un manejo complejo de errores en múltiples pasos.
//Quieres mantener una estructura de código simple y lineal.
//-------------------------------------------------------------------------
function hacerAlgo(callback) {

  setTimeout(function() {
    console.log("Operación completada.");
    callback(); 
  }, 1000);
}

hacerAlgo(function() {
  console.log("¡El callback se ejecutó!");
});
//-------------------PROMESA-------------------------------------
//Hay múltiples operaciones asíncronas que dependen una de la otra.
//Necesitas un manejo de errores robusto y centralizado con .catch().
//Quieres un código más legible y modular usando .then() para encadenar operaciones.
//Estás trabajando con funciones asíncronas modernas (async/await).
//---------------------------------------------------------------------------
function hacerPromesa() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promesa resuelta");
    }, 1000);
  });
}

hacerPromesa()
  .then((mensaje) => {
    console.log(mensaje);
    return "Promesa encadenada"; 
  })
  .then((otroMensaje) => {
    console.log(otroMensaje);
  })
  .catch((error) => {
    console.log(error);
  });