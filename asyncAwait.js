function realizarLlamadaBD() {
  return new Promise(resolve => (
    setTimeout(() => {
      resolve('Datos extraidos');
      console.log('esperando...');
    }, 2000)
  ));
}

async function consumeBD() {
  console.log("obteniendo datos de BD...");
  const result = await realizarLlamadaBD();
  console.log("terminé de esperar");
  console.log("Datos obtenidos: ", result);
  return result;
}

const obtenerDatosAPI = (api) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (api === 'API1') {
        resolve('Datos de la API1');
      } else if (api === 'API2') {
        resolve('Datos de la API2');
      } else {
        reject('ERROR en obtener datos');
      }
    }, 2000);
  });
}

const ejecutarAPI = async () => {
  try {
    // codigo que tratará
    console.log('iniando utilización de API 1');
    const datos1 = await obtenerDatosAPI('API1');
    console.log(datos1);

    console.log('iniando utilización de API 2');
    const datos2 = await obtenerDatosAPI('API2');
    console.log(datos2);

    console.log('iniando ejemplo reject');
    const datos3 = await obtenerDatosAPI('API3');
    console.log(datos3);


  } catch (error) {
    // codigo ante una excepción
    console.error(error);
  }
}

module.exports = {
  realizarLlamadaBD, 
  consumeBD,
  obtenerDatosAPI,
  ejecutarAPI,
}