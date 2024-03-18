// 6 - Utiliza el método fetch() para obtener datos de una API de tu elección. Imprime los datos resultantes en la consola.

const URL = "https://jsonplaceholder.typicode.com/posts/1";

// then()
const fetching = fetch(URL);

fetching
  .then((response) => {
    if (response.status !== 200) throw new Error("No conectó con el servidor");
    return response.json();
  })
  .then((json) => console.log(json))
  .catch((error) => console.log(error));

// async/await
const fecthingDatos = async (url) => {
  try {
    const response = await fetch(url);
    if(response.status !== 200) throw new Error('No conectó con el servidor');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

fecthingDatos(URL)
