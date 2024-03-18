// 5 - Crea tres Promises consecutivas, donde cada una se resuelva después de 1 segundo y devuelva un número diferente. Luego, encadena las tres Promises para sumar los resultados y mostrar el resultado final.
const creadorPromesas = (valor) =>
  new Promise((resolve) => setTimeout(() => resolve(valor), 1000));

let acumulador = 0;
creadorPromesas(2)
  .then((value) => {
    acumulador += value;
    console.log(value);
    return creadorPromesas(4);
  })
  .then((value) => {
    acumulador += value;
    console.log(value);
    return creadorPromesas(6);
  })
  .then((value) => {
    acumulador += value;
    console.log(value);
    console.log(`Suma: ${acumulador}`);
  });
