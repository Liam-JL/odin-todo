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

}