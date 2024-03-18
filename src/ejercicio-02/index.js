// 2 - Crea una Promise que se resuelva después de 3 segundos y luego imprima "Promise resuelta" cuando se cumpla.
const myPromise = new Promise((resolve) =>
  setTimeout(() => resolve("Promise resuelta"), 1000)
)
myPromise.then((value) => console.log(value));
