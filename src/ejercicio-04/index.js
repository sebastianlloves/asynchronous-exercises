// 4 - Crea una Promise que se rechace después de 2 segundos y captura el error para imprimir "Error: Promise rechazada".
const myPromise = new Promise((resolve, reject) =>
  setTimeout(() => reject("Promise rechazada"), 4000)
);
myPromise.catch((err) => console.log(`Error: ${err}`));