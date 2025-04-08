import { getCurrentProject } from "./project_state-manager"
// ─────────────────────────────────────────────────────────
// LIB: Todo Storage
export function saveTodos(allTodos) {
    const todosJson = JSON.stringify(allTodos)
    localStorage.setItem("todos", todosJson)
}

export function getTodos() {
    const todos = localStorage.getItem("todos") ?? "[]"
    return JSON.parse(todos)
}

// ─────────────────────────────────────────────────────────
// LIB: Project Storage
export function saveProjects(allProjects) {
    const projectsJson = JSON.stringify(allProjects);
    localStorage.setItem("projects", projectsJson);
}

export function getProjects() {
    const projects = localStorage.getItem("projects") ?? '[]'; //{"title": "Priority"}, {"title": "Inbox"}
    return JSON.parse(projects)
}

export function getCurrentTodos() {
    for(const project of getProjects()){
        if(project.id === getCurrentProject().id){
            return project.todos;
        }
    }
}


