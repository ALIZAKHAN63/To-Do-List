function addTask() {
    var taskInput = document.getElementById('taskInput')
    var output = taskInput.value;
    if (output === "") {
        alert("please enter task")
        return;
    }
    var taskList = document.getElementById('taskList')
    taskList.innerHTML = taskList.innerHTML + "<li>" + output + " <button onclick='completeTask(this)'>✔️</button></li>";

    taskInput.value = "";

}

function completeTask(button) {
    var taskItem = button.parentElement;
    button.remove();

    var completedList = document.getElementById('CompleteTaskContainer');
    completedList.innerHTML = completedList.innerHTML + "<li>" + taskItem.innerHTML + "</li>";

    taskItem.remove();
}















