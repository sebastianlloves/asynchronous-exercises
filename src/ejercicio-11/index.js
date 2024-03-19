// 11 - Realiza tres Promises, algunas de las cuales se resuelvan y otras se rechacen. Utiliza Promise.allSettled() para obtener información sobre el estado de todas las Promises.

const promise1 = new Promise((resolve) =>
  setTimeout(() => {
    console.log("Promesa 1");
    resolve("Promesa 1 resuelta");
  }, 2000)
);
const promise2 = new Promise((resolve) => {
  console.log("Promesa 2");
  resolve("Promesa 1 resuelta.");
});
const promise3 = new Promise((_, reject) =>
  setTimeout(() => {
    console.log("Promesa 3");
    reject("Promesa 1 rechazada.");
  }, 1000)
);

Promise.allSettled([promise1, promise2, promise3]).then(results => console.log(results))
