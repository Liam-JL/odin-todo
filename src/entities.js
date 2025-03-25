// ─────────────────────────────────────────────────────────
// ENTITY: Todo
export class Todo {
    constructor(title, details= "", dueDate ="", projectId ="") {
        this.title = title;
        this.details = details;
        this.dueDate = dueDate;
        this.projectId = projectId;
        this.completed = false;
        this.priority = false;
    }
}
// ─────────────────────────────────────────────────────────

export class Project {
    constructor(title) {
        this.title = title;
    }
}