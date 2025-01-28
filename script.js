const taskInputHolder = document.getElementById("inputTask");
const createList = document.getElementById("unorderedList");

window.onload = function() {
    loadTasks();
};

function enterInput() {
    if (taskInputHolder.value === "") {
        alert("Enter the Task!");
    } else {
        let listTod = document.createElement("li");
        listTod.textContent = taskInputHolder.value;
        createList.appendChild(listTod);
        saveTask(taskInputHolder.value);
        taskInputHolder.value = "";

        listTod.addEventListener("click", function () {
            listTod.style.textDecoration = "line-through";
            listTod.style.backgroundColor = "#330b78";
            listTod.style.color = "white";
        });

        listTod.addEventListener("dblclick", function () {
            listTod.remove();
            removeTask(listTod.textContent);
        });
    }
}

function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


function removeTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(t => t !== task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        let listTod = document.createElement("li");
        listTod.textContent = task;
        createList.appendChild(listTod);


        listTod.addEventListener("click", function () {
            listTod.style.textDecoration = "line-through";
            listTod.style.backgroundColor = "#330b78";
            listTod.style.color = "white";
        });


        listTod.addEventListener("dblclick", function () {
            listTod.remove();
            removeTask(listTod.textContent);
        });
    });
}
