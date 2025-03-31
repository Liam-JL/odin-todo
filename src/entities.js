// ─────────────────────────────────────────────────────────
// ENTITY: Todo
export class Todo {
    constructor(title, description= "", dueDate ="", projectId ="inbox") {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.projectId = projectId;
        this.completed = false;
        this.priority = false;
    }
}

// ─────────────────────────────────────────────────────────
// ENTITY: Project

export class Project {
    constructor(title) {
        this.id = Date.now().toString(36) + Math.floor(Math.pow(10, 12) + Math.random() * 9*Math.pow(10, 12)).toString(36);
        this.title = title;
    }

}

// ─────────────────────────────────────────────────────────
