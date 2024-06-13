
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('todoForm');
    const todoInput = document.getElementById('todoInput');
    const todoList = document.getElementById('todoList');

    const maxItems = 5;

    form.addEventListener('submit', function (event) {

        event.preventDefault();
        if (todoList.children.length >= maxItems) {
            alert("Limit 5");
            return;
        }


        const newTask = todoInput.value;
        const listItem = document.createElement('li');
        listItem.textContent = newTask;

        todoList.appendChild(listItem);

        todoInput.value = '';

        listItem.addEventListener('click', function () {
            todoList.removeChild(listItem);
        });
    });
});
