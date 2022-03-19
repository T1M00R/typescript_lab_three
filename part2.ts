// let tasks: Array<string> alternative 
let tasks: string[] = [];

function addTask(task:string){

    tasks.push(task);
    console.log ("Task "+ task + "inserted into array\n");
    console.log("Length of the array: " + tasks.length);

}
