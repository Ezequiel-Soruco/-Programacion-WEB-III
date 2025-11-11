
const promesaDeExito = new Promise((resolve, reject) => {
  // se ejecutara en 3 segundos
  setTimeout(() => {
    resolve("3 segundos :)");
  }, 3000);
});


promesaDeExito.then((mensaje) => {
  console.log(mensaje);
});