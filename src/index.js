import "./styles.css"
import { ProjectService, ProjectRepository } from "./project_service";
import { TaskService, TaskRepository } from "./task_service";
import { View } from "./view";

class AppController {
    constructor(taskService, projectService, view) {
        this.taskService = taskService;
        this.projectService = projectService;
        this.view = view

        //Casche DOM
        this.addProjectBtn = document.getElementById("addProjectBtn");
        this.priorityProjectsBtn = document.getElementById("priorityProjectsBtn");
        this.headerAccountMenu = document.getElementById("headerAccountMenu");
        this.tabBarProjectsBtn = document.getElementById("tabBarProjectsBtn");
        this.addTaskBtn = document.getElementById("addTaskBtn");
        this.tabBarSortBtn = document.getElementById("tabBarSortBtn");
        this.createProjectModal = document.getElementById("createProjectModal");
        this.projectModalCancelBtn = document.getElementById("projectModalCancelBtn");
        this.createProjectForm = document.getElementById("createProjectForm");
        this.projectModalInput = document.getElementById("projectModalInput");
        this.userProjects = document.getElementById("userProjects");
        this.taskModal = document.getElementById("taskModal");
        this.taskModalCloseBtn = document.getElementById("taskModalCloseBtn");
        this.taskFormInputs = document.querySelectorAll(".task-form__input");
        this.taskFormSubmitBtn = document.getElementById("taskFormSubmitBtn");
        this.taskForm = document.getElementById("taskForm");
        this.taskProjectInput = document.getElementById("taskProjectInput");

        //Event Listeners
        this.addProjectBtn.addEventListener("click", this.onAddProjectBtn.bind(this));
        this.priorityProjectsBtn.addEventListener("click", this.onPriorityProjectsBtn.bind(this));
        this.headerAccountMenu.addEventListener("click", this.onHeaderAccountMenu.bind(this));
        this.tabBarProjectsBtn.addEventListener("click", this.onTabBarProjectsBtn.bind(this));
        this.addTaskBtn.addEventListener("click", this.onAddTaskBtn.bind(this));
        this.tabBarSortBtn.addEventListener("click", this.onTabBarSortBtn.bind(this));
        this.projectModalCancelBtn.addEventListener("click", this.onProjectModalCancelBtn.bind(this));
        this.createProjectForm.addEventListener("submit", this.onCreateProjectForm.bind(this));
        this.taskModalCloseBtn.addEventListener("click", this.onTaskModalCloseBtn.bind(this));
        this.taskForm.addEventListener("submit", this.onTaskForm)
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
        const projects = this.projectService.getProjects();
        const projectOptions = [];
        Object.keys(projects).forEach(key => {
            const projectTitle = this.projectService.getProjectTitle(key);
            const projectOption = this.view.createProjectOption(projectTitle);
            projectOptions.push(projectOption);
        })
        this.view.renderProjectOptions(this.taskProjectInput, projectOptions);
        this.taskModal.showModal();
    }

    onTabBarSortBtn() {
        console.log("tab bar sort button clicked")
    }

    onProjectModalCancelBtn() {
        this.createProjectModal.close();
    }

    onCreateProjectForm(event) {
        event.preventDefault();
        const projectTitle = this.projectModalInput.value;
        const newProject = this.projectService.createProject(projectTitle);
        const newBtn = this.view.createProjectBtn(newProject);
        this.view.renderProjectBtn(this.userProjects, newBtn);
        this.createProjectModal.close();
    }

    onTaskModalCloseBtn() {
        this.taskModal.close();
    }

    onTaskForm(event) {
        event.preventDefault();
        console.log("task form submitted");
        this.taskModal.close();
    }




}

const taskService = new TaskService(new TaskRepository());
const projectService = new ProjectService(new ProjectRepository());
const view = new View()
const appController = new AppController(taskService, projectService, view);
