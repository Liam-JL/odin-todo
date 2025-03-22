import "./style.css"

const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput")
const todoListUL = document.getElementById("todoListUL")

let allTodos = getTodos();
updateTodoList();

todoForm.addEventListener('submit', function(event){
    event.preventDefault();
    addTodo();
})

function addTodo() {
    const todoText = todoInput.value.trim();
    if(todoText.length > 0) {
        const todoObject = {
            text: todoText,
            completed: false
        }
        allTodos.push(todoObject);
        updateTodoList();
        saveTodos();
        todoInput.value = "";
    }
}

function updateTodoList() {
    todoListUL.innerHTML = "";
    allTodos.forEach((todo, todoIndex) => {
        const todoLi = createTodoLi(todo, todoIndex);
        todoListUL.append(todoLi);
    })
}

function createTodoLi(todo, todoIndex) {
    const todoId = "todo-"+todoIndex;
    const todoText = todo.text
    const todoLi = document.createElement("li");
    todoLi.className = "todo";
    todoLi.innerHTML = `
    <input type="checkbox" id="${todoId}" class="checkbox">
        <label class="custom-checkbox" for="${todoId}">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="transparent">
                <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
            </svg>
        </label>
        <label for="${todoId}" class="todo-text">
            ${todoText}
        </label>
        <button class="delete-button">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--secondary-color)">
                <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
            </svg>
        </button>
    `;

    const deleteButton = todoLi.querySelector(".delete-button")
    deleteButton.addEventListener("click", () => {
        deleteTodoLi(todoIndex);
    })

    const checkbox = todoLi.querySelector(".checkbox");
    checkbox.addEventListener("change", () => {
        allTodos[todoIndex].completed = checkbox.checked;
        saveTodos();
    })

    checkbox.checked = todo.completed;
    return todoLi;
}

function saveTodos() {
    const todosJson = JSON.stringify(allTodos)
    localStorage.setItem("todos", todosJson)
}

function getTodos() {
    const todos = localStorage.getItem("todos") ?? "[]"
    return JSON.parse(todos)
}

function deleteTodoLi(todoIndex) {
    allTodos = allTodos.filter((_, i) => i !== todoIndex);
    saveTodos();
    updateTodoList();
}