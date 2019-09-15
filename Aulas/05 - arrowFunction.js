const arr = [1,2,3,4,5,6];

const newArr = arr.map(item => item * 2) ;

console.log(newArr );

const teste = () =>{
    return 'teste';
}
console.log(teste());

const teste2 = () => [1,2,3,4,5];

console.log(teste2());

const teste3 = () => ({nome:'Joao'});

console.log(teste3());