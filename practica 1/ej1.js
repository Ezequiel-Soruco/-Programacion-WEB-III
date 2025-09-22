function miFuncion(texto) {

  const conteo = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0
  };
  
  const cadena = texto.toLowerCase();

  for (let i = 0; i < cadena.length; i++) {
    const c = cadena[i]; // El caracter actual

 
    if (c === 'a') {
      conteo.a++;
    } else if (c === 'e') {
      conteo.e++;
    } else if (c === 'i') {
      conteo.i++;
    } else if (c === 'o') {
      conteo.o++;
    } else if (c === 'u') {
      conteo.u++;
    }
  }

  return conteo;
}

let obj = miFuncion("euforia");
console.log(obj);