function addTask() {
    var taskInput = document.getElementById('taskInput')
    var output = taskInput.value.trim()
    if (output === "") {
        alert("please enter a task")
        return
    }
    
    var taskList = document.getElementById('taskList')
    taskList.innerHTML = taskList.innerHTML + 
        "<li>" + 
            "<button onclick='editTask(this)'>✏️</button>" +  
            output + 
            " <button onclick='completeTask(this)'>✔️</button>" +  
        "</li>";

    taskInput.value = "";

}

function completeTask(button) {
    var taskItem = button.parentElement;
    button.remove();
    taskItem.firstElementChild.remove();
    var completedList = document.getElementById('CompleteTaskContainer');
    completedList.innerHTML = completedList.innerHTML + "<li>" + taskItem.innerHTML +" <button class='delete-btn' onclick ='taskDeleted(this)'>❌</button></li>";

    taskItem.remove();
    
    
}
function taskDeleted(button){
    var deleteItems = button.parentElement;
    deleteItems.remove();
}

function editTask(button) {
    var taskItem = button.parentElement;
    var currentText = taskItem.innerText.replace("✏️", "").replace("✔️", "").trim(); 
    var newText = prompt("Edit task:", currentText); 

    taskItem.innerHTML = 
        "<button onclick='editTask(this)'>✏️</button> " + 
        (newText || currentText).trim() + 
        " <button onclick='completeTask(this)'>✔️</button>";
}
var taskInput = document.getElementById('taskInput');
taskInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addTask(); 
    }
});











