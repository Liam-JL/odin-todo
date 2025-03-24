import { Todo } from "./entities";
import { getTodos, saveTodos } from "./shared/lib";

let allTodos = getTodos();

export function addTodo(title) {
    if(title.length > 0) {
        const todo = new Todo(title);
        allTodos.push(todo);
        saveTodos(allTodos);
    }
}

export function deleteTodo(index) {

}