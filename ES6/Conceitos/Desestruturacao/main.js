const usuario = {
  nome: 'Sandro',
  idade: 46,
  endereco: {
    cidade: 'Paranavaí',
    estado: 'PR'
  }
}

const { nome, idade, endereco: { cidade } } = usuario
console.log(nome, idade, cidade)

function mostraNome({ nome, idade, endereco: { cidade } }) {
  console.log(nome, idade, cidade)
}
mostraNome(usuario)