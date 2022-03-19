import { todoInterface } from "./todointerface";

class Todo implements todoInterface{

    constructor(){}

    // change to another declaration if not working
    tasks: Array<string>;

    addTask(task:string):number{
        
        this.tasks.push(task);
        console.log ("Task "+ task + "inserted into array\n");
        //console.log("Length of the array: " + this.tasks.length);
        return (this.tasks.length);
    }
    
    listAllTasks(){

        for(let i = 0; i < this.tasks.length; i++){
            console.log(this.tasks[i]);
        }
    }

    deleteTask(task:string){

        for(let i = 0; i < this.tasks.length; i++){
            
            let index:number = this.tasks.indexOf(task);
            if (index > -1){
                this.tasks.splice(index, 1)
                console.log("Task " + task + " has been deleted\n");
                //console.log("Length of the array: " + this.tasks.length);
                return this.tasks.length;
            }
        }
    }
}

let myTodos = new Todo();
myTodos.addTask("Eat");
myTodos.addTask("Sleep");
myTodos.addTask("Code");

myTodos.listAllTasks();

myTodos.deleteTask("Sleep");