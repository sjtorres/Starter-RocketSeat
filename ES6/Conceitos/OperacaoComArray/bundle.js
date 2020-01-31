"use strict";

var arr = [1, 3, 4, 5, 8, 9];
var newArr = arr.map(function (item) {
  return item * 2;
});
console.log(newArr);
var sum = arr.reduce(function (total, next) {
  return total + next;
});
console.log(sum);
var filtrar = arr.filter(function (item) {
  return item % 2 === 1;
});
console.log(filtrar);
var encontrar = arr.find(function (item) {
  return item === 4;
});
console.log(encontrar);
