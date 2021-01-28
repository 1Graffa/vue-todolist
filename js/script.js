var app = new Vue({
  el : '#app',
  data : {
    newTodo: "",
    todos: [
      "Fare i compiti",
      "Fare la spesa",
      "Studiare",
      "Ginnastica"
    ],
    todosDelete: []
  },
  methods: {
    addTodo(){
      if (this.newTodo.length < 4){
        alert("la lunghezza deve essere maggiore di 3 caratteri");
      } else {
        this.todos.push(this.newTodo);
        this.newTodo = "";
        }
      },

    // ora dobbiamo passare l indice dell elemento che vogliamo eliminare :
    deleteTodo(index){
    // lo pushamo nella lista elementi eliminati
    this.todosDelete.push(this.todos[index]);
      //e lo togliamo dall'array con splice e indichiamo (1) che dobbiamo eliminare quello soltanto (possiamo indicare volendo dopo il numero come o con cosa sostituirlo, noi mettiamo una stringa )
    alert("hai eliminato " + this.todos[index]);
    this.todos.splice(index, 1);

    },
    restoreTodo(index){
      this.todos.push(this.todosDelete[index]);
      this.todosDelete.splice(index,1);
    }


  }
});
