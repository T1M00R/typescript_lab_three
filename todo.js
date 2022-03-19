"use strict";
exports.__esModule = true;
var Todo = /** @class */ (function () {
    function Todo() {
    }
    Todo.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log("Task " + task + "inserted into array\n");
        //console.log("Length of the array: " + this.tasks.length);
        return (this.tasks.length);
    };
    Todo.prototype.listAllTasks = function () {
        for (var i = 0; i < this.tasks.length; i++) {
            console.log(this.tasks[i]);
        }
    };
    Todo.prototype.deleteTask = function (task) {
        for (var i = 0; i < this.tasks.length; i++) {
            var index = this.tasks.indexOf(task);
            if (index > -1) {
                this.tasks.splice(index, 1);
                console.log("Task " + task + " has been deleted\n");
                //console.log("Length of the array: " + this.tasks.length);
                return this.tasks.length;
            }
        }
    };
    return Todo;
}());
var myTodos = new Todo();
myTodos.addTask("Eat");
myTodos.addTask("Sleep");
myTodos.addTask("Code");
myTodos.listAllTasks();
myTodos.deleteTask("Sleep");
