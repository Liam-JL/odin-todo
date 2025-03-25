import { addTodo, deleteTodo, toggleChecked } from "./features";
import { getTodos, saveTodos } from "./shared/lib";

// ─────────────────────────────────────────────────────────
// 📌 WIDGET: Todo Form
export function renderTodoForm () {
    const form = document.createElement("form");
    form.className = "todo-form"
    form.innerHTML = `
        <button class="todo-form__open-btn" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
                <path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
            </svg> 
            Add a todo
        </button>
        <div class="todo-form__inputs-container">
        <input id="titleInput" class="todo-input" type="text" placeholder="Title" autocomplete="off">
        <input id="detailsInput" class="todo-input" type="text" placeholder="Details" autocomplete="off">
        <input id="dueDateInput class"todo-input" type="date">
        <select id="projectIdInput>
            <option value="inbox">Inbox</option>
        </select>
        <button id="todoAddBtn" class="add-button">ADD</button>
        </div>
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
    const deleteButton = todoItem.querySelector(".delete-button");
    deleteButton.addEventListener("click", () => {
        deleteTodo(index);
        renderTodoList();
    })

    const checkbox = todoItem.querySelector(".checkbox");
    checkbox.addEventListener("change", () => {
        toggleChecked(index, checkbox);
    })
    checkbox.checked = todo.completed;

    return todoItem;
}

