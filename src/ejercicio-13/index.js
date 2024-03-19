// 13 - Realiza una llamada a una API con Axios y maneja posibles errores utilizando try/catch para mostrar un mensaje de error en caso de fallo.

import axios from "https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";

const URL = "https://jsonplaceholder.typicode.com/posts";

// then()
const getDataWithThen = (url) => {
  axios
    .get(url)
    .then((response) => console.log(response.data))
    .catch((error) =>
      console.error(`Ha ocurrido un error. Mensaje: ${error.message}`)
    )
    .finally(() => console.log("Solicitud terminada."));
};
getDataWithThen(URL);


// async/await
const getDataWithAsyncAwait = async (url) => {
  try {
    const response = await axios.get(url);
    console.log(response.data);
  } catch (error) {
    console.error(`Ha ocurrido un error. Mensaje: ${error.message}`);
  } finally {
    console.log("Solicitud terminada.");
  }
};
getDataWithAsyncAwait(URL);
