// let tasks: Array<string> alternative 
let tasks: string[] = [];

addTask("Take out bins");
listAllTasks();


function addTask(task:string){

    tasks.push(task);
    console.log ("Task "+ task + "inserted into array\n");
    console.log("Length of the array: " + tasks.length);

}

function listAllTasks(){

    for(let i = 0; i < tasks.length; i++){

        console.log(tasks[i]);

    }


}