"use strict";

var usuario = {
  nome: 'Joao',
  idade: 29,
  endereco: {
    cidade: 'Valinhos',
    estado: 'SP'
  }
};
console.log(usuario);
var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log(nome, idade, cidade);

function mostraNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome, idade);
}

console.log(mostraNome(usuario));
