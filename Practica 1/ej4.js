const encontrarExtremos = (num) => {
  if (num.length === 0) {
    return { mayor: null, 
        menor: null 
    };
  }

  let mayor = num[0];
  let menor = num[0];

  for (let i = 1; i < num.length; i++) {
    const numActual = num[i];
    
    if (numActual > mayor) {
      mayor = numActual;
    }
    
    if (numActual < menor) {
      menor = numActual;
    }
  }

  return { mayor, menor };
};

// Casos de uso

let objVacio = encontrarExtremos([]);
console.log(objVacio); 


let obj = encontrarExtremos([3, 1, 5, 4, 2]);
console.log(obj); 