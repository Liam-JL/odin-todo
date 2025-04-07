import { Todo, Project } from "./entities";
import { getProjects, getTodos, saveProjects, saveTodos } from "./shared/lib";

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
    saveTodos(allTodos)
}

export function toggleChecked(index, checkbox) {
    const allTodos = getTodos();
    allTodos[index].completed = checkbox.checked;
    saveTodos(allTodos);
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
