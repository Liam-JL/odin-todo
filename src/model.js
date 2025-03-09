class Task {
    #id = Date.now().toString(36) + Math.floor(Math.pow(10, 12) + Math.random() * 9*Math.pow(10, 12)).toString(36);

    constructor(title = '', project = "inbox", description = null, dueDate = null, priority = false) {
        this.title = title;
        this.project = project;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checked = false;
    }

    set id(newId) {
        this.#id = newId;
    }

    get id() {
        return this.#id;
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

export class TaskService {
    constructor(repo) {
        this.taskRepo = repo;
    }
    
    createTask(inputValues) {
        const task = new Task(...inputValues);
        this.taskRepo.saveTask(task);
        return task;
    }

    updateTask(taskId, inputValues = []) {
        const taskIndex = this.taskRepo.tasks.findIndex((task) => task.id === taskId);
        const newTask = new Task(...inputValues);
        newTask.id = taskId;
        this.taskRepo.tasks[taskIndex] = newTask;
        return newTask;  
    } 
}

export class ProjectRepository {
    #projects = new Set(); // change to localStorage

    get projects() {
        return this.#projects;
    }

    saveProject(project) {
        this.#projects.add(project)
    }

    deleteProject(title) {
        this.#projects.delete(title);
    }
}

export class ProjectService {
    constructor(repo) {
        this.projectRepo = repo;
        this.createProject("inbox");
    }

    createProject(title) {
        this.projectRepo.saveProject(title);
    }

    updateProject(oldTitle, newTitle) {
        
    }
}







