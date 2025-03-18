class Project {
    #id = Date.now().toString(36) + Math.floor(Math.pow(10, 12) + Math.random() * 9*Math.pow(10, 12)).toString(36);

    constructor(title) {
        this.title = title;
    }

    get id() {
        return this.#id;
    }
}

export class ProjectRepository {
    #projects = {};

    get projects() {
        return this.#projects;
    }

    saveProject(project) {
        this.#projects[project.id] = project
    }

    deleteProject(projectId) {
        this.#projects = this.#projects.filter((project) => project.id !== projectId);
    }

    updateProjectTitle(projectId, newTitle) {
        this.#projects[projectId].title = newTitle;
    }
    
}

export class ProjectService {
    constructor(repo) {
        this.repo = repo;
        this.createProject("Inbox");
    }

    createProject(title) {
        const project = new Project(title);
        this.repo.saveProject(project);
    
        return project;
    }

    updateProjectTitle(projectId, newTitle) {
        this.repo.updateProjectTitle(projectId, newTitle)
    }

    getProjects() {
        return this.repo.projects;
    }

    getProjectTitle(projectId) {
        return this.repo.projects[projectId].title;
    }
}
