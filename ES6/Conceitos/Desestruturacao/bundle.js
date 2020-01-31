"use strict";

var usuario = {
  nome: 'Sandro',
  idade: 46,
  endereco: {
    cidade: 'Paranavaí',
    estado: 'PR'
  }
};
var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log(nome, idade, cidade);

function mostraNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade,
      cidade = _ref.endereco.cidade;
  console.log(nome, idade, cidade);
}

mostraNome(usuario);
