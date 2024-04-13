let todo=[];  // initially no task is there
let req=prompt("Please enter your request");
while(true){ // bcoz hamara app chalta rahega jb tk user quit na krde
    if(req=="quit"){
        console.log("Quit Todo App");
        break;
    }
    else if(req=="list"){
        console.log("Here is your task list:");
        console.log("--------------");
        for(task of todo){
            console.log(task);
        }
        console.log("--------------");
    }
    else if(req=="add"){
        let task=prompt("Please enter the task that you want to add");
        todo.push(task);
        console.log(`Task ${task} added in your todo list`);
    }
    else if(req=="delete"){
        task=prompt("Please enter the task that you want to delete");
        let index=todo.indexOf(task);
        if(index==-1){
            console.log("This task is not present in your todo list");
        }
        else{
            todo.splice(index,1);
            console.log(`Task ${task} deleted from your todo list`)
        }
    }
    else{
        console.log("Wrong request");
    }
    req=prompt("Please enter your request");
}