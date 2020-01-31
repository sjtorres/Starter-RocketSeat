"use strict";

var arr = [1, 3, 4, 5, 8];
var newArr = arr.map(function (item) {
  return item * 2;
});
console.log(newArr);

var teste = function teste() {
  return {
    nome: 'Sandro'
  };
};

console.log(teste());
var filtrar = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filtrar);
var encontrar = arr.find(function (item) {
  return item === 8;
});
console.log(encontrar);
