// 14 - Realiza una llamada a una API con fetch() y, después de recibir los datos, encadena Promises para realizar varias operaciones de manipulación de datos, como filtrar, mapear o reducir los resultados.

const URL = "https://jsonplaceholder.typicode.com/posts";
const operation1 = (data) =>
  data.map(({ title, body }) => {
    return { title: title.toUpperCase(), body };
  });
const operation2 = (data) => data.filter((post) => post.body.startsWith("f"));

// then()

const getProcessDataWithThen = (url) => {
  fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error("Error de conexión");
      return response.json();
    })
    .then((data) => operation1(data))
    .then((data) => operation2(data))
    .then((data) => console.log(data))
    .catch((error) =>
      console.log(`Se produjo un error del tipo: ${error.message}`)
    )
    .finally(() => console.log("Solicitud finalizada"));
};
getProcessDataWithThen(URL);

// async/await

const getProcessDataWithAsyncAwait = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Falló la conexión");
    const data = await response.json();
    const processData = operation2(operation1(data));
    console.log(processData);
  } catch (error) {
    console.log(`Error mensaje: ${error.message}`);
  } finally {
    console.log("Solicitud finalizada");
  }
};
getProcessDataWithAsyncAwait(URL);
