import { addTodo } from "./features";
import { getTodos, saveTodos } from "./shared/lib";

// ─────────────────────────────────────────────────────────
// 📌 WIDGET: Todo Form
export function renderTodoForm () {
    const form = document.createElement("form");
    form.className = "todo-form"
    form.innerHTML = `
        <input id="todoInput" class="todo-input" type="text" placeholder="Add task" autocomplete="off">
        <button id="todoAddBtn" class="add-button">ADD</button>
    `

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const titleInput = form.querySelector("#todoInput");
        addTodo(titleInput.value);
        renderTodoList();
        titleInput.value = "";
    });

    return form
}

// ─────────────────────────────────────────────────────────
// 📌 WIDGET: Todo List
export function renderTodoList() {
    const todoList = document.getElementById("todoList") || document.createElement("ul");
    todoList.id = "todoList";
    todoList.innerHTML = "";

    const allTodos = getTodos();
    allTodos.forEach((todo, index) => {
        const todoItem = renderTodoItem(todo, index);
        todoList.append(todoItem);
    })

    return todoList;
}

// ─────────────────────────────────────────────────────────
// 📌 WIDGET: Todo Item
function renderTodoItem(todo, index) {
    const todoId = "todo-"+index;
    const title = todo.title;
    const todoItem = document.createElement("li");
    todoItem.className = "todo";
    todoItem.innerHTML = `
     <input type="checkbox" id="${todoId}" class="checkbox">
        <label class="custom-checkbox" for="${todoId}">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="transparent">
                <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
            </svg>
        </label>
        <label for="${todoId}" class="todo-text">
            ${title}
        </label>
        <button class="delete-button">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--secondary-color)">
                <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
            </svg>
        </button>
    `
    return todoItem;
}

