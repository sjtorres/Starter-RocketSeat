// REST
const usuario = {
  nome: 'Sandro',
  idade: 46,
  endereco: {
    cidade: 'Paranavaí',
    estado: 'PR'
  }
}

const { nome, ...resto } = usuario
console.log(nome, resto)

const arr = [1, 2, 3, 5, 8, 9]

const [a, b, ...sobra] = arr
console.log(a)
console.log(b)
console.log(sobra)

// SPREAD

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

const arr3 = [...arr1, ...arr2]
console.log(arr3)

const usuario2 = { ...usuario, idade: 47 }
console.log(usuario2)