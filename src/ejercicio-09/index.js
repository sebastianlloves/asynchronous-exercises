// 9 - Crea una función asincrónica que realice una llamada a una API utilizando Axios y luego manipule los datos recibidos para mostrar información específica.

import axios from "https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";

const URL = "https://jsonplaceholder.typicode.com/posts";

const getData = async(url) => {
    try {
        const response = await axios.get(url)
        console.log(response.data)        
    } catch (error) {
        console.log(error.message)
    }
}

getData(URL)
