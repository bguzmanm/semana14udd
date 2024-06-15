const realizarOperacionCallback = (callback) => {
  console.log('Realizando operación asincrona...');
  setTimeout(
    () => {
        callback('Esto fue un error')
      },
    3000);
}

const mostrarMensaje = (mensaje) => {
  console.log(mensaje);
}

module.exports = {
  realizarOperacionCallback,
  mostrarMensaje,
}