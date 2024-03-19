// 8 - Después de realizar una llamada a una API con fetch(), utiliza el método .then() para filtrar los datos y mostrar solo los elementos que cumplan ciertos criterios (por ejemplo, mostrar solo los nombres que comiencen con "A").

const URL = "https://jsonplaceholder.typicode.com/posts";

// then()
fetch(URL)
  .then((response) => {
    if (response.status !== 200) throw new Error("Url incorrecta");
    return response.json();
  })
  .then((data) => {
    const filteredData = data.filter(({ title }) => title[0] === "a");
    console.log(filteredData);
  })
  .catch((error) => console.log(`Mensaje del error: ${error.message}`));

// asyn/await
const getData = async (url) => {
    try {
        const response = await fetch(url)
        if(response.status !== 200) throw new Error ('URL incorrecta')
        const data = await response.json()
        const filteredData = data.filter(({ title }) => title[0] === "a");
        console.log(filteredData);
    } catch (error) {
        console.log(error.message)
    }
}

getData(URL)
