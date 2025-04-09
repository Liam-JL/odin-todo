import { Todo, Project } from "./entities";
import { getProjects, getTodos, saveProjects, saveTodos } from "./shared/lib";
import { getCurrentProject } from "./shared/project_state-manager";

export function addTodo(inputs) {
    if (inputs[0].length > 0) {
        const todo = new Todo(...inputs)
        const allTodos = getTodos();
        allTodos.push(todo);
        saveTodos(allTodos);
    }
}

export function deleteTodo(index) {
    const allTodos = getTodos().filter((_, i) => i !== index);
    // const allTodos = getTodos().filter((todo) => todo.projectId === getCurrentProject().id)
    saveTodos(allTodos)
}

export function toggleChecked(index, checkbox) {
    const allTodos = getTodos();
    allTodos[index].completed = checkbox.checked;
    saveTodos(allTodos);
}

export function togglePriority(index) {
    const allTodos = getTodos();
    allTodos[index].priority = !allTodos[index].priority;
    saveTodos(allTodos)
}

export function renderPriorityTodos() {
    const allTodos = getTodos();
    
}

export function toggleElementVisibility(element) {
    element.classList.contains("active") ? 
    element.classList.remove("active") : 
    element.classList.add("active");
}

export function addProject(title) {
    if(title.length > 0) {
        const project = new Project(title);
        const allProjects = getProjects();
        allProjects.push(project);
        saveProjects(allProjects);
    }
}

export function deleteProject(index) {
    const allProjects  = getProjects().filter((_, i) => i !== index);
    saveProjects(allProjects);
}

export function removeActiveProjectStyling(projectBtn) {
    projectBtn.classList.remove("active")
}

export function addActiveProjectStyling(projectBtn) {
    projectBtn.classList.add("active")
}


export function renderTodoViewState(todoItem, todo, todoId) {
    todoItem.innerHTML = 
    `
     <input type="checkbox" id="${todoId}" class="checkbox">
        <label class="custom-checkbox" for="${todoId}">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="transparent">
                <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
            </svg>
        </label>
        <span class="todo-text">${todo.title}</span>
        <button class="priority-button">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-120q-33 0-56.5-23.5T400-200q0-33 23.5-56.5T480-280q33 0 56.5 23.5T560-200q0 33-23.5 56.5T480-120Zm-80-240v-480h160v480H400Z"/></svg>
        </button>
        <button class="delete-button">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--secondary-color)">
                <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
            </svg>
        </button>
        <span class="todo-description">${todo.description}</span>
        <span class="todo-duedate">${todo.dueDate}</span>
    `
}