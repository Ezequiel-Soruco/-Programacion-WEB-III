function clasificarNumeros(numeros) {
  const vectores = {
    pares: [],
    impares: []
  };

  let contPar= 0;
  let contImp = 0;

  for (let i = 0; i < numeros.length; i++) {
    const num = numeros[i];

    if (num % 2 === 0) {

      vectores.pares[contPar] = num;
      contPar++;
    } else {
      
      vectores.impares[contImp] = num;
      contImp++;
    }
  }

  return vectores;
}


let obj = clasificarNumeros([1, 2, 3, 4, 5]);
console.log(obj); 