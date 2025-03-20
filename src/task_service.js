class Task {
    #id = Date.now().toString(36) + Math.floor(Math.pow(10, 12) + Math.random() * 9*Math.pow(10, 12)).toString(36);

    constructor(title, dueDate, dueTime, description, projectId) {
        this.title = title;
        this.projectId = projectId;
        this.description = description;
        this.dueDate = dueDate;
        this.dueTime = dueTime;
        this.priority = false;
        this.checked = false;
    }

    get id() {
        return this.#id;
    }
}

export class TaskRepository {
    #tasks = {};

    get tasks() {
        return this.#tasks;
    }

    saveTask(task) {
        this.#tasks[task.id] = task;
    }

    deleteTask(taskId) {
        this.#tasks = this.#tasks.filter((task) => task.id !== task.id);
    }

    updateTaskProject(taskId, newProjectId) {
        this.#tasks[taskId].projectId = newProjectId;
    }

    updateTaskTitle(taskId, inputs) {
        //this.#tasks[taskId] for key that
    }

    updateTaskDescription() {

    }

    updateTaskDueDate() {

    }

    toggleTaskCheck() {

    }
}

export class TaskService {
    constructor(repo) {
        this.repo = repo;
    }

    //take inputs as array
    createTask(inputs) {
        const task = new Task(...inputs);
        this.repo.saveTask(task);
        console.log(task)
    }

    getTasks() {
        return this.repo.tasks;
    }

    getTasksByProject(projectId) {
        const tasks = this.repo.tasks;
        let filteredTasks = {}
        for(const key of Object.keys(tasks)) {
            if(tasks[key].projectId === projectId) {
                filteredTasks[key] = tasks[key];
            }
        }

        return filteredTasks;

    }
}