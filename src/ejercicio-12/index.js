// 12 - Crea un bucle que realice llamadas asincrónicas utilizando async/await para procesar una lista de elementos uno por uno.

const elements = [1, 2, 3, 4];

const asyncProcess = async (elements) => {
  for (const element of elements) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(`Elemento procesado: ${element}`);
  }
};

asyncProcess(elements);
