const arr = [1, 3, 4, 5, 8];

const newArr = arr.map(item => item * 2)
console.log(newArr);

const teste = () => ({ nome: 'Sandro' })
console.log(teste())

const filtrar = arr.filter(item => item % 2 === 0)
console.log(filtrar)

const encontrar = arr.find(item => item === 8)
console.log(encontrar)