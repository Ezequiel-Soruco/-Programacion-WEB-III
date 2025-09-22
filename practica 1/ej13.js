//-------------------------ANDAMIENTO DE PROMESAS---------------------------
// Funciones que devuelven promesas
const hervirAgua = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('1. El agua está hirviendo.');
      resolve(true);
    }, 2000);
  });
};

const agregarPasta = (aguaLista) => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('2. Pasta agregada.');
      resolve('Pasta lista');
    }, 3000);
  });
};

const servirPlato = (pastaLista) => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('3. Plato servido.');
      resolve(`¡Disfruta tu plato de ${pastaLista}!`);
    }, 1000);
  });
};

// Anidamiento de promesas
hervirAgua().then(aguaLista => {
    return agregarPasta(aguaLista)
    .then(pastaLista => {
        return servirPlato(pastaLista)
          .then(resultado => {
            console.log(resultado);
          });
      });
  });
