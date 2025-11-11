// Mismas funciones base que devuelven promesas
const getUser = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("-> Obteniendo usuario...");
      resolve({ id: 101, name: "Ezequiel " });
    }, 1000);
  });
};

const getPosts = (userId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("-> Obteniendo posts");
      resolve([{ id: 1, title: "Buen dia  Licenciado" }]);
    }, 1500);
  });
};

// Función migrada a async/await
const obtenerDatosConAsyncAwait = async () => {
  try {
    const user = await getUser();
    console.log(`Usuario obtenido: ${user.name}`);
    
    const posts = await getPosts(user.id);
    console.log("Posts obtenidos:", posts);
    
    console.log("Proceso completado.");
  } catch (error) {
    console.error("Hubo un error:", error);
  }
};

// Llamada a la función
obtenerDatosConAsyncAwait();