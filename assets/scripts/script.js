document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.add-task-btn').addEventListener('click', newElement);

    function newElement() {
        var inputValue = document.querySelector('.task-input').value;
        if (inputValue === '') {
            alert("You must write something!");
            return;
        }

        var newTaskItem = document.createElement("div");
        newTaskItem.className = "task-item";

        var li = document.createElement("li");
        li.textContent = inputValue;
        newTaskItem.appendChild(li);

        var deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener('click', function() {
            newTaskItem.remove();
        });
        newTaskItem.appendChild(deleteBtn);

        document.querySelector('.content').appendChild(newTaskItem);

        document.querySelector('.task-input').value = "";
    }
});
