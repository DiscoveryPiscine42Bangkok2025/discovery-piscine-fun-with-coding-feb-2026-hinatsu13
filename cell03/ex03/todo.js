window.onload = loadTodos;

function newTodo() {
    const text = prompt("Enter a new TO DO:");
    if (!text)
        return;

    addTodo(text);
    saveTodos();
}

function addTodo(text) {
    const ft_list = document.getElementById("ft_list");
    const div = document.createElement("div");

    div.textContent = text;

    div.onclick = () => {
        if (confirm("Do you want to remove this TO DO?")) {
            div.remove();
            saveTodos();
        }
    };

    ft_list.prepend(div);
}

function saveTodos() {
    const ft_list = document.getElementById("ft_list");
    const todos = [];

    for (let item of ft_list.children) {
        todos.push(item.textContent);
    }

    document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todos));
}

function loadTodos() {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
        if (cookie.startsWith("todos=")) {
            const data = cookie.substring(6);
            const todos = JSON.parse(decodeURIComponent(data));
            for (let i = todos.length - 1; i >= 0; i--) {
                addTodo(todos[i]);
            }
        }
    }
}
