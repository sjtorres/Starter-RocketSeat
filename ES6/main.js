const arr = [1, 3, 4, 5, 8, 9];

const newArr = arr.map(function(item) {
  return item * 2;
})

console.log(newArr);

const sum = arr.reduce(function(total, next) {
  return total + next;
})

console.log(sum)

const filtrar = arr.filter(function(item) {
  return item % 2 === 1;
})

console.log(filtrar)

const encontrar = arr.find(function(item) {
  return item === 4;
})

console.log(encontrar)