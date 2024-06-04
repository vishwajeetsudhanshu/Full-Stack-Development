let todo=[];

let req= prompt("Please! enter your request");

while(true){
    if(req=="quit"){
        console.log("quittiing App");
        break;
    }
    if(req=="list"){
        console.log("------------------");
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("-----------------");
        
    } else if(req=="add"){
        let task=prompt("Please! enter the task you want to add");
        todo.push(task);
        
        console.log("task added",task);
    
    }else if(req=="delete"){
        let idx=prompt("Please! enter the task index");
        todo.splice(idx,1);
        console.log("task delete",task)
    }else{
        console.log("wrong req");
    }
    req= prompt("Please! enter your request");
}

