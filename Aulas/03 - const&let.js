const usuario = {
    nome: 'Joao'
};
console.log(usuario);
usuario.nome = "Alfafa"
console.log(usuario);


function Teste(x) {
    let y = 2;
    if (x > 5) {
        let y = 89;
        console.log(x, y);
    }
}
Teste(10);