function invertirCadena(cadenaOriginal) {
  let nuevaCadena = "";
  for (let i = cadenaOriginal.length - 1; i >= 0; i--) {
    nuevaCadena += cadenaOriginal[i];
  }

  return nuevaCadena;
}

let cad = invertirCadena("abcd");
console.log(cad); 