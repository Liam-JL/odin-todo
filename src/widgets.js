import { addTodo } from "./features";

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
        const titleInput = form.querySelector("#todoInput").value;
        addTodo(titleInput);
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

    //pass in alltodos and render list item for each one

    return todoList;
}