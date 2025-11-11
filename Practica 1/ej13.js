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
//--------------------------------------------------------------------------------------
//------------------------------async/await--------------------------------------
// Mismas funciones que devuelven promesas
const hervirAgua1 = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('1. El agua está hirviendo.');
      resolve(true);
    }, 2000);
  });
};

const agregarPasta1 = (aguaLista) => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('2. Pasta agregada.');
      resolve('Pasta lista');
    }, 3000);
  });
};

const servirPlato1 = (pastaLista) => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('3. Plato servido.');
      resolve(`¡Disfruta tu plato de ${pastaLista}!`);
    }, 1000);
  });
};

// La función async que coordina todo
async function prepararComida() {
  try {
    const aguaLista1 = await hervirAgua1();
    const pastaLista1 = await agregarPasta1(aguaLista1);
    const resultado1 = await servirPlato1(pastaLista1);
    
    console.log(resultado1);
  } catch (error) {
    console.error("Algo salió mal:", error);
  }
}

// Llamamos a la función
prepararComida();