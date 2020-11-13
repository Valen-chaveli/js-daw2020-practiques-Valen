'use strict';
Array.prototype.avg = () => {
  let sumaValores = this.reduce((acu, valor) => acu + valor, 0);
  return sumaValores;
};

const a = [10, 5, 5];
console.log(a.avg());
