// 1 - Escribe una función que utilice un callback para imprimir "Hola, mundo" después de 2 segundos de ejecución
const printAfter = (callback, time) =>
  setTimeout(() => callback("Hola mundo"), time);
const imprimir = (string) => console.log(string);
printAfter(imprimir, 1000);
