// Desafio 1

console.log("========= Desafio 1 =========");

class User {
    constructor(email, senha) {
        this.email = email,
            this.senha = senha
        this.admin = false;
    }

    IsAdmin() {
        return this.admin;
    }
}

class Admin extends User {
    constructor(email, senha) {
        super(email, senha);
        this.admin = true;
    }

}

const user1 = new User("joao@hotmail.com", 1234);
console.log(user1);
console.log(user1.IsAdmin());

const admin1 = new Admin("joao@hotmail.com", 1234);
console.log(admin1);
console.log(admin1.IsAdmin());

// Desafio 2

console.log("========= Desafio 2 =========");

const users = [{
        nome: 'Diego',
        idade: 23,
        empresa: 'Rocketseat'
    },
    {
        nome: 'Gabriel',
        idade: 15,
        empresa: 'Rocketseat'
    },
    {
        nome: 'Lucas',
        idade: 30,
        empresa: 'Facebook'
    }
];

const idades = users.map(({
    idade
}) => idade);
console.log(idades);

const rocket = users.filter(({
    empresa,
    idade
}) => empresa === 'Rocketseat' && idade >= 18);
console.log(rocket);

const google = users.find(({
    empresa
}) => empresa === 'Google');
console.log(google);

const multIdade = users.map(user => {
    user.idade *= 2;
    return user
}).filter(({
    idade
}) => idade <= 50)
console.log(multIdade);

// Desafio 3

console.log("========= Desafio 3 =========");

const arr = [1, 2, 3, 4, 5];
console.log(arr.map(item => item + 10));

const user = {
    name: 'Joao',
    age: 29
};

const mostrarIdade = usr => usr.age;
console.log(mostrarIdade(user));

const name = 'Joao';
const age = 29;

const ShowUser = (nome = 'Pedro', idade = '34') => ({
    nome,
    idade
})
console.log(ShowUser('Joao'));
console.log(ShowUser());

const promise = () => new Promise((resolve) => resolve("Deu certo"))
promise().then((response) => console.log(response));

// Desafio 4

console.log("========= Desafio 4 =========");


const user4 = {
    nome: 'Vaca',
    idade: 23,
    empresa: 'Rocketseat'
}
const mostraInfo = ({
    nome,
    idade
}) => `${nome} tem ${idade} anos.`
console.log(mostraInfo(user4));

// Desafio 5

console.log("========= Desafio 5 =========");

const arr2 = [1, 2, 3, 4, 5, 6];
const [x, ...y] = arr2;
console.log(x, y);

const sum = (...params) => params.reduce((total, next) => total + next)
console.log(sum(1, 2, 3, 4, 5, 6));
console.log(sum(1, 2));

const usuarioSpread = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};

const userSpread1 = {...usuarioSpread,nome:"Gabriel"}
const userSpread2 = {...usuarioSpread,endereco:{...usuarioSpread.endereco,cidade:'Lontras'}}

console.log(userSpread1);
console.log(userSpread2);

// Desafio 6

console.log("========= Desafio 6 =========");

const usuario = 'Diego';
const idade = 23;
console.log(`O usuário ${usuario} tem ${idade} anos.`);

// Desafio 7

console.log("========= Desafio 7 =========");

const nome7 = 'Diego';
const idade7 = 23;
const cidade7 = 'ValCamp'

const usuario7 = {
 nome7,
 idade7,
 cidade7,
};

console.log(usuario7);