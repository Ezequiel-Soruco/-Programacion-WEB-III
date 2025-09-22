function esPalindromo(cadena) {

  const cad = cadena.toLowerCase();
  
  let cadenaIn = "";


  for (let i = cad.length - 1; i >= 0; i--) {
    cadenaIn += cad[i];
  }


  if (cad === cadenaIn) {
    return true;
  } else {
    return false;
  }
}


let band1 = esPalindromo("oruro");
console.log(band1); 

let band2 = esPalindromo("hola");
console.log(band2); 