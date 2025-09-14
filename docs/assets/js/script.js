
document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("task-input");
    const addTaskButton = document.getElementById("add-task-btn");
    const taskList = document.getElementById("task-list");
    const emptyImage = document.querySelector(".empty-image");

    const toggleEmptyState = () => {
        emptyImage.style.display = taskList.children.length === 0 ? "block" : "none";
    }
    const addTask = (event) => {
        event.preventDefault();
        const taskText = taskInput.value.trim();
        if (!taskText) {
            return;
        }
        const li = document.createElement("li");
        li.textContent = taskText;
        taskList.appendChild(li);
        taskInput.value = "";
        toggleEmptyState();
    };

    addTaskButton.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask(event);
        }
    })
    
});