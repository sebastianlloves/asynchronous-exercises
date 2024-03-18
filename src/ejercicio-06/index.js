// 6 - Utiliza el método fetch() para obtener datos de una API de tu elección. Imprime los datos resultantes en la consola.
// then()
const response = fetch("https://jsonplaceholder.typicode.com/posts/1");

response
  .then((datos) => datos.json())
  .then((json) => console.log(json))
  .catch((error) => console.log(`Hubo un error del tipo: ${error.type} `));

// async/await
const fecthingDatos = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Hubo un error.");
  }
};

fecthingDatos("https://jsonplaceholder.typicode.com/posts/1");
