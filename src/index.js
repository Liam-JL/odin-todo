import "./styles.css"
import {TaskRepository, TaskService, ProjectRepository, ProjectService} from "./model"

class AppController {
    constructor(taskService, projectService) {
        this.taskService = taskService;
        this.projectService = projectService;

        //Casche DOM
        this.addProjectBtn = document.getElementById("addProjectBtn");
        this.priorityProjectsBtn = document.getElementById("priorityProjectsBtn");
        this.headerAccountMenu = document.getElementById("headerAccountMenu");
        this.tabBarProjectsBtn = document.getElementById("tabBarProjectsBtn");
        this.addTaskBtn = document.getElementById("addTaskBtn");
        this.tabBarSortBtn = document.getElementById("tabBarSortBtn");
        this.createProjectModal = document.getElementById("createProjectModal");

        //Event Listeners
        this.addProjectBtn.addEventListener("click", this.onAddProjectBtn.bind(this));
        this.priorityProjectsBtn.addEventListener("click", this.onPriorityProjectsBtn.bind(this));
        this.headerAccountMenu.addEventListener("click", this.onHeaderAccountMenu.bind(this));
        this.tabBarProjectsBtn.addEventListener("click", this.onTabBarProjectsBtn.bind(this));
        this.addTaskBtn.addEventListener("click", this.onAddTaskBtn.bind(this));
        this.tabBarSortBtn.addEventListener("click", this.onTabBarSortBtn.bind(this));
    }

    //Controller methods
    onAddProjectBtn() {
        console.log("Add project button clicked")
        this.createProjectModal.showModal();
    }

    onPriorityProjectsBtn() {
        console.log("Priority project button clicked")
    }

    onHeaderAccountMenu() {
        console.log("header account button clicked")
    }

    onTabBarProjectsBtn() {
        console.log("tab bar projects button clicked")
    }

    onAddTaskBtn() {
        console.log("add task button clicked")
    }

    onTabBarSortBtn() {
        console.log("tab bar sort button clicked")
    }
}

const taskService = new TaskService(new TaskRepository());
const projectService = new ProjectService(new ProjectRepository());
const appController = new AppController(taskService, projectService);
