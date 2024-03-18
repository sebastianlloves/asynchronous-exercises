// 3 - Define una función asincrónica que espere 1 segundo y luego devuelva una cadena que diga "Operación completada". Utiliza async/await.
(async function myAsync() {
  const promise = await new Promise((resolve) =>
    setTimeout(() => resolve("Operación completada"), 1000)
  );
  console.log(promise);
})();
