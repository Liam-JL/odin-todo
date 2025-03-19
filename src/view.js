export class View {
    createProjectBtn(project) {
        const btn = document.createElement("button");
        btn.classList.add("projects__btn");
        btn.setAttribute("id", `${project.id}-btn`);
        btn.textContent = project.title;
        return btn
    }

    renderProjectBtn(parent, btn) {
        parent.appendChild(btn);
    } 

    createProjectOption(projectTitle, projectId) {
        const option = document.createElement("option")
        option.setAttribute("value", projectId);
        option.classList.add("task-form__option");
        option.textContent = projectTitle;
        return option
    }

    renderProjectOptions(parent, options) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild)
        };

        for(const option of options) {
            parent.appendChild(option);
        }
    }

    createTaskCard() {
        
    }
}