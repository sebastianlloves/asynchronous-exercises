// 14 - Realiza una llamada a una API con fetch() y, después de recibir los datos, encadena Promises para realizar varias operaciones de manipulación de datos, como filtrar, mapear o reducir los resultados.

// Estos ejercicios deberían ayudar a los alumnos a practicar y reforzar los conceptos clave de la clase sobre Promises, async/await y llamadas a APIs en JavaScript.

const URL = "https://jsonplaceholder.typicode.com/psts";

const operation1 = (data) => data;
const operation2 = (data) => data;
const operation3 = (data) => data;

// then()

const getProcessDataWithThen = (url) => {
  fetch(url)
    .then((response) => {
    //   if (response.status !== 200) throw new Error("Error de conexión");
      return response.json();
    })
    .then((data) => operation1(data))
    .then((data) => operation2(data))
    .then((data) => operation3(data))
    .then((data) => console.log(data))
    .catch((error) => console.log(`Se produjo un error del tipo: ${error.message}`))
    .finally(() => console.log('Solicitud finalizada'));
};
getProcessDataWithThen(URL);

// async/await

const getProcessDataWithAsyncAwait = (url) => {};
