//promesa para sumar con delay de 1seg
const sumar = (a, b) => {
  return new Promise((resolve) => {
    console.log(`${a} + ${b}`);
    setTimeout(() => resolve(a + b), 1000);
  });
};

// Promesa para multiplicar con delay de 1seg
const multiplicar = (numero, factor) => {
  return new Promise((resolve) => {
    console.log(`${numero} * ${factor}`);
    setTimeout(() => resolve(numero * factor), 1000);
  });
};

// Promesa para restar con delay de 1seg
const restar = (numero, resta) => {
  return new Promise((resolve) => {
    console.log(` ${numero} - ${resta}`);
    setTimeout(() => resolve(numero - resta), 1000);
  });
};

// Encadenamiento de  las promesas
sumar(10, 5)  .then((suma) => {
    console.log(`Resultado de la suma: ${suma}`); 
    return multiplicar(suma, 2);
  }).then((producto) => {
    console.log(`Resultado de la multiplicación: ${producto}`); 
    return restar(producto, 7);
  }).then((resultado) => {
    console.log(`Resultado de la resta: ${resultado}`); 
    console.log(`\nEl resultado final es: ${resultado}`);
  });