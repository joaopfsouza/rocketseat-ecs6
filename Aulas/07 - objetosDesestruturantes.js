    const usuario = {
        nome: 'Joao',
        idade: 29,
        endereco:{
            cidade:'Valinhos',
            estado:'SP'
        }
    };

    console.log(usuario);

    const { nome,idade, endereco:{cidade} } = usuario;

    console.log(nome,idade,cidade);

    function mostraNome({nome,idade}) {
        console.log(nome,idade);
        
    } 
  
    console.log(mostraNome(usuario));