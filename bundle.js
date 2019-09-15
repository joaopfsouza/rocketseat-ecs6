"use strict";

var usuario = {
  nome: 'Joao'
};
console.log(usuario);
usuario.nome = "Alfafa";
console.log(usuario);

function Teste(x) {
  var y = 2;

  if (x > 5) {
    var _y = 89;
    console.log(x, _y);
  }
}

Teste(10);
