// ─────────────────────────────────────────────────────────
// ENTITY: Todo
export class Todo {
    constructor(title, description, dueDate, projectId) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.projectId = projectId;
        this.completed = false;
        this.priority = false;
    }
}
// ─────────────────────────────────────────────────────────
