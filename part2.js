// let tasks: Array<string> alternative 
var tasks = [];
addTask("Take out bins");
listAllTasks();

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
