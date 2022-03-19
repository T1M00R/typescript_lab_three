// let tasks: Array<string> alternative 
var tasks = [];
addTask("Take out bins");
listAllTasks();
deleteTask("Take out bins");
function addTask(task) {
    tasks.push(task);
    console.log("Task " + task + "inserted into array\n");
    console.log("Length of the array: " + tasks.length);
}
function listAllTasks() {
    for (var i = 0; i < tasks.length; i++) {
        console.log(tasks[i]);
    }
}
function deleteTask(task) {
    for (var i = 0; i < tasks.length; i++) {
        var index = tasks.indexOf(task);
        if (index > -1) {
            tasks.splice(index, 1);
            console.log("Task " + task + " has been deleted\n");
            console.log("Length of the array: " + tasks.length);
        }
    }
    //tasks.pop();
}
