import { Todo, Project } from "./entities";
import { getTodos, saveTodos } from "./shared/lib";

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

export function toggleFormVisibility(inputsContainer) {
    inputsContainer.classList.contains("active") ? 
    inputsContainer.classList.remove("active") : 
    inputsContainer.classList.add("active");
}

export function toggleProjectBar(projectBar) {
    const children = projectBar.children;
    
    if(projectBar.classList.contains("active") === false) {
        projectBar.classList.add("active");
        for (const child of children) {
            child.classList.add("active");
        }
    } else {
        projectBar.classList.remove("active");
        for (const child of children) {
            child.classList.remove("active");
        }
    }
}

