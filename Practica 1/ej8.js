
function miCallback() {
  console.log("se ejecutó en 2 segundos");
}

setTimeout(miCallback, 2000);

console.log("Esto se ejecuta inmediatamente.");