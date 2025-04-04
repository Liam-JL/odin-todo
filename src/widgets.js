import { addTodo, deleteTodo, toggleChecked, toggleFormVisibility, toggleProjectBar, addProject} from "./features";
import { getTodos, getProjects, saveProjects } from "./shared/lib";

// ─────────────────────────────────────────────────────────
// 📌 WIDGET: Todo Form
export function renderTodoForm () {
    const form = document.createElement("form");
    form.className = "todo-form"
    form.innerHTML = `
        <button id="openFormBtn" class="todo-form__open-btn" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
                <path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
            </svg> 
            Add a todo
        </button>
        <div id="inputsContainer" class="todo-form__inputs-container">
            <input id="titleInput" class="todo-input todo-input--title" type="text" placeholder="Add title" autocomplete="off">
            <input id="descriptionInput" class="todo-input todo-input--description" type="text" placeholder="Add description" autocomplete="off">
            <input id="dueDateInput class"todo-input todo-input--date" type="date">
            <select id="projectIdInput class="todo-input todo-input--projects">
                <option value="12345">Inbox</option>
            </select>
            <button id="todoAddBtn" class="todo-form__add-button">ADD</button>
        </div>
    `

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const formInputs = [];
        form.querySelectorAll("input, select").forEach((input) => formInputs.push(input.value))
        addTodo(formInputs);
        renderTodoList();
        form.reset()
        toggleFormVisibility(inputsContainer);
    });

    const openFormBtn = form.querySelector("#openFormBtn");
    const inputsContainer = form.querySelector("#inputsContainer")
    openFormBtn.addEventListener("click", () => {
        toggleFormVisibility(inputsContainer);
    })

    return form
}

// ─────────────────────────────────────────────────────────
// 📌 WIDGET: Todo List
export function renderTodoList() {
    const todoList = document.getElementById("todoList") || document.createElement("ul");
    todoList.id = "todoList";
    todoList.className = "todo-list";
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
    const todoId = "todo-" + index;
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

// ─────────────────────────────────────────────────────────
// 📌 WIDGET: Projects bar
export function renderProjectsBar() {
    const projectBar = document.getElementById("projectBar") || document.createElement("aside");
    projectBar.className = "project-bar"
    projectBar.id = "projectBar"
    projectBar.innerHTML = `
        <button id="projectsOpenBtn" class="project-bar__open-btn">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
                <path d="M120-240v-80h520v80H120Zm664-40L584-480l200-200 56 56-144 144 144 144-56 56ZM120-440v-80h400v80H120Zm0-200v-80h520v80H120Z"/>
            </svg>
        </button>
        <div id="projectBtnContainer" class="project-bar__container">
        </div>
        <button id="createProjectBtn" class="project-bar__project-btn project-bar__project-btn--add">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
                <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
            </svg> <span>Create new project</span>
        </button>
    `

    const projectBtnContainer = projectBar.querySelector("#projectBtnContainer");
    const allProjects = getProjects();
    if (allProjects.length === 0) {
        const priority = addProject("Priority")
        const Inbox = addProject("Inbox")
    }

    allProjects.forEach((project, index) => {
        const projectButton = renderProjectButton(project.title, index);
        projectBtnContainer.append(projectButton);
    })
    
    const openBtn = projectBar.querySelector("#projectsOpenBtn");
    openBtn.addEventListener("click", () => {
        toggleProjectBar(projectBar);
    })

    const createProjectBtn = projectBar.querySelector("#createProjectBtn");
    createProjectBtn.addEventListener("click", () => {
        const modal = renderProjectModal()
        modal.showModal();
    })

    return projectBar;
}

// ─────────────────────────────────────────────────────────
// 📌 WIDGET: Project button
function renderProjectButton(title, index) {
    const projectButton = document.createElement("button");
    const projectId = "project-" + index
    projectButton.id = projectId;
    projectButton.className = "project-bar__project-btn"

    if (title === "Priority") {
        projectButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
                <path d="M480-120q-33 0-56.5-23.5T400-200q0-33 23.5-56.5T480-280q33 0 56.5 23.5T560-200q0 33-23.5 56.5T480-120Zm-80-240v-480h160v480H400Z"/>
            </svg> <span>${title}</span>
        `
    } else if(title === "Inbox") {
        projectButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
                <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-120H640q-30 38-71.5 59T480-240q-47 0-88.5-21T320-320H200v120Zm280-120q38 0 69-22t43-58h168v-360H200v360h168q12 36 43 58t69 22ZM200-200h560-560Z"/>
            </svg> <span>${title}</span> 
        `
    } else {
        projectButton.innerHTML = `
            <button id="editBtn" class="edit-button">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--secondary-color)">
                    <path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z"/>
                </svg> 
            </button>
        <span>${title}</span>
        `
        const editBtn = projectButton.querySelector("#editBtn");
        editBtn.addEventListener("click", () => {
            const modal = renderRenameProjectModal(title, index);
            modal.showModal();
        })

    }

    return projectButton
}

// ─────────────────────────────────────────────────────────
// 📌 WIDGET: Project Modal
export function renderProjectModal() {
    let modal = document.getElementById("createProjectModal") || document.createElement("dialog");

    modal.querySelector("#createProjectForm").reset()

    modal.id = "createProjectModal";
    modal.className = "create-project-modal";
    modal.innerHTML = `
        <form id="createProjectForm" class="create-project-form" method="modal">
            <h2 class="create-project-modal__header">Create new project</h2>
            <input name="create-project" id="projectModalInput" type="text" class="create-project-modal__input" placeholder="Enter name" autocomplete="off">
            <button type="button" id="projectModalCancelBtn" class="create-project-modal__btn create-project-modal__btn--cancel">Cancel</button>
            <button type="submit" id="projectModalDoneBtn" class="create-project-modal__btn create-project-modal__btn--submit">Done</button>
        </form>
    `

   document.getElementById("app").append(modal);

    const cancelBtn = modal.querySelector("#projectModalCancelBtn")
    cancelBtn.addEventListener("click", () => {
        modal.close()
    } )

    const projectForm = modal.querySelector("#createProjectForm");
    projectForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const titleInput = projectForm.querySelector("#projectModalInput");
        addProject(titleInput.value);
        renderProjectsBar();
        modal.close();
    })

    return modal 
}

// ─────────────────────────────────────────────────────────
// 📌 WIDGET: Rename Project Modal
export function renderRenameProjectModal(title, index) {
    let modal = document.getElementById("renameProjectModal") || document.createElement("dialog");

    modal.id = "renameProjectModal";
    modal.className = "create-project-modal";
    modal.innerHTML = `
    <form id="renameProjectForm" class="create-project-form" method="modal">
        <h2 class="create-project-modal__header">Rename project</h2>
        <input name="rename-project" id="renameProjectModalInput" type="text" class="create-project-modal__input" placeholder="${title}" autocomplete="off">
        <button type="button" id="renameProjectModalCancelBtn" class="create-project-modal__btn create-project-modal__btn--cancel">Cancel</button>
        <button type="submit" id="renameProjectModalDoneBtn" class="create-project-modal__btn create-project-modal__btn--submit">Done</button>
    </form>
    `


   document.getElementById("app").append(modal);

    const cancelBtn = modal.querySelector("#renameProjectModalCancelBtn")
    cancelBtn.addEventListener("click", () => {
        modal.close();
    } )

    const projectForm = modal.querySelector("#renameProjectForm");
    projectForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const allProjects = getProjects();
        const renamedTitle = projectForm.querySelector("#renameProjectModalInput").value;
        allProjects[index].title = renamedTitle;
        saveProjects(allProjects);
        renderProjectsBar();
        modal.close();
    })

    return modal 
}


