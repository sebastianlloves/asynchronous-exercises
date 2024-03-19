// 9 - Crea tres Promises que se resuelvan después de diferentes intervalos de tiempo y luego utilice Promise.all() para mostrar un mensaje cuando todas se hayan resuelto.

const promiseCreator = (delay, number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(number);
      resolve(number);
    }, delay);
  });
};

const promise1 = promiseCreator(1000, 1);
const promise2 = promiseCreator(4000, 2);
const promise3 = promiseCreator(2000, 3);
Promise.all([promise1, promise2, promise3]).then((results) =>
  console.log(`Se cumplieron todas las promesas, resultados: ${results}`)
);
