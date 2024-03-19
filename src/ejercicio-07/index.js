// 7 - Realiza una llamada a una API utilizando Axios. Muestra los datos obtenidos en la consola.

import axios from "https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";

const URL = "https://jsonplaceholder.typicode.com/psts/1";

// then()
axios
.get(URL)
.then(result => console.log(result.data))
.catch(error => console.log('Error de conexión: ', error.message));

// async/await
const getData = async(url) => {
    try {
        const response = await axios.get(url)
        console.log(response.data)
    } catch (error) {
        console.log(error.message)
    }
}

getData(URL)