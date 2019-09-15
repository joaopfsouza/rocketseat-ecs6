class ToDoList{
    constructor(){
        this.todos=[];
    }
    static addTodo(){
        this.todos.push('Novo Todo');
        console.log(this.todos);
    }
}

class Matematica{
    static Soma(a,b){
        return a+b;
    }
}

console.log(Matematica.Soma(5,3));