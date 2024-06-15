const fs = require('fs');

const leerArchivo = async (fileName) => {
  const data = await fs.promises.readFile(fileName, 'utf-8');
  // console.log(data);
  return data;
}

const escribirArchivo = async (fileName, contenido) => {
  await fs.promises.writeFile(fileName, contenido.toString('utf-8'), 'utf-8');
  console.log("Archivo escrito");
}

const main = async () => {
  const datos = await leerArchivo('./input.txt');
  await escribirArchivo('./output.txt', datos);
}

main();