const miPromesa = new Promise((resolve, reject) => {
  const exito = false;

  if (exito) {
    resolve('Salio todo bien');
  } 

  reject('Hicimos todo lo que pudimos, pero se murió');
});

miPromesa
  .then((mensaje) => {
    console.log(mensaje);
  })
  .catch((error) => {
    console.error(error);
  });