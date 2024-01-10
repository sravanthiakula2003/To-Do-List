function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    
    if (taskInput.value.trim() !== "") {
      const newTask = document.createElement("li");
      newTask.innerHTML = `
        ${taskInput.value}
        <button onclick="removeTask(this)">Delete</button>`;
        <button onclick="removeTask(this)">ClearAll</button>;
      
      taskList.appendChild(newTask);
      taskInput.value = "";
    }
  }
  function removeTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
  }
  function removeTask(ClearAll) {
    const taskItem =button.parentElement;
    taskItem.remove();
  }

  