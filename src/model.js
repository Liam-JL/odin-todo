class Task {
    constructor(title, project = "inbox", description = null, dueDate = null, priority = false) {
        this.id = Date.now().toString(36) + Math.floor(Math.pow(10, 12) + Math.random() * 9*Math.pow(10, 12)).toString(36);
        this.title = title;
        this.project = project;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checked = false;
    }
}

 export class TaskRepository {
    #tasks = [];  // change to localStorage

    get tasks() {
        return this.#tasks;
    }

    saveTask(task) {
        this.tasks.push(task);
    }

    deleteTask(taskId) {
        this.#tasks = this.#tasks.filter((task) => task.id !== taskId);
    }
}

class ProjectRepository {
    #projects = []; // change to localStorage

    get projects() {
        return this.#projects;
    }

    pushProject(project) {
        this.#projects.push(project)
    }
}

export class TaskService {
    constructor(repo) {
        this.taskRepo = repo;
    }

    createTask(inputValues) {
        const task = new Task(...inputValues);
        this.taskRepo.saveTask(task);
        return task;
    }

}







