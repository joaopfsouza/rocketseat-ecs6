// REST 
const usuario = {
    nome: "Joao",
    idade: 29,
    emprea: "Kroton"
};

const {
    nome,
    ...resto
} = usuario;

console.log(nome, resto);


const arr = [1, 2, 3, 4];
const [a, b, ...c] = arr;

console.log(a, b, c);

const soma = (...params) => params.reduce((total, next) => total + next);

console.log(soma(1,2,3,4,5));

// SPREAD

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr1,...arr2];

console.log(arr3);

const usuario2 = {...usuario, nome: "Paulo"};

console.log(usuario2);