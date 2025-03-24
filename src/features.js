import { Todo } from "./entities";
import { getTodos, saveTodos } from "./shared/lib";

export function addTodo(title) {
    if(title.length > 0) {
        const todo = new Todo(title);
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