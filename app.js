function addTask(){
    var taskInput  = document.getElementById('taskInput')
    var output = taskInput.value

    var taskList =document.getElementById('taskList')
    taskList.innerHTML = taskList.innerHTML +"<li>" + output + "</li>";

    taskInput.value = "";
}






