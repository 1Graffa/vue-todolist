// Realizzare una todolist con Vue. La lista deve essere già popolata con alcuni elementi e si deve dare la possibilità di aggiungere nuovi item e di cancellarli.
// Bonus 1): permettere ai file cancellati di finire in un'area 'cestino' dove possono essere eliminati del tutto oppure ripristinati.
// Bonus 2): Dare la possibilità di eliminare tutti i file dal cestino
// Aggiungete quello che più vi piace a piacere!
// inserire il nuovo todo
// modificare un todo Bonus
// spostare il todo nel cestino
// pulsante per spostare tutti i todo nel cestino Bonus
// ripristinare dal cestino un todo  Bonus
// eliminare definitivamente un todo dal cestino Bonus
// pulsante per eliminare tutti i todo del cestino Bonus

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
