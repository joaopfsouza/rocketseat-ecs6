class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

class ToDoList extends List {
    constructor() {
        super();
        this.usuario = "JoaoP";
    }

    MostraUsuario(){
        console.log(this.usuario);
    }
}

var MinhaLista = new ToDoList();

document.getElementById('novotodo').onclick = function () {
    MinhaLista.add("Novo ToDo");
    MinhaLista.MostraUsuario();
}