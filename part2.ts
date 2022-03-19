// let tasks: Array<string> alternative 
export = {} 
let tasks: string[] = [];

addTask("Take out bins");
listAllTasks();
deleteTask("Take out bins");



function addTask(task:string){

    tasks.push(task);
    console.log ("Task "+ task + "inserted into array\n");
    console.log("Length of the array: " + tasks.length);
    return (tasks.length);
}

function listAllTasks(){

    for(let i = 0; i < tasks.length; i++){

        console.log(tasks[i]);

    }


}

function deleteTask(task:string){

    for(let i = 0; i < tasks.length; i++){
        
        let index:number = tasks.indexOf(task);
        if (index > -1){
            tasks.splice(index, 1)
            console.log("Task " + task + " has been deleted\n");
            console.log("Length of the array: " + tasks.length);
            return tasks.length;

        }
            
        
    }

    //tasks.pop();
    

}