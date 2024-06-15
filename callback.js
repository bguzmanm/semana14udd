const saludo = () => {
  console.log('Hola a todos y todas');
}
const esperarTiempo = (callback, milisegundos) => {
  setTimeout(callback, milisegundos);
}

esperarTiempo(saludo, 4000);

console.log("Terminé de ejecutar");
