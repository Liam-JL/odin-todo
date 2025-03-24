// ─────────────────────────────────────────────────────────
// LIB: Storage
export function saveTodos(allTodos) {
    const todosJson = JSON.stringify(allTodos)
    localStorage.setItem("todos", todosJson)
}

export function getTodos() {
    const todos = localStorage.getItem("todos") ?? "[]"
    return JSON.parse(todos)
}

// ─────────────────────────────────────────────────────────