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

    createIcon(pathValue, width, height) {
        const icon = document.createElement("svg");
        icon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        icon.setAttribute("width", width);
        icon.setAttribute("height", height);
        icon.setAttribute("fill", "currentColor");
        icon.setAttribute("viewBox", "0 0 16 16");

        const path = document.createElement("path");
        path.setAttribute("d", pathValue );

        icon.appendChild(path);

        return icon
    }

    createTaskCard(task) {
        //Task Card
        const taskCard = document.createElement("div");
        taskCard.classList.add("task");
        
        //Checkbox Button
        const checkbox = document.createElement("button");
        checkbox.classList.add("task__checkbox");
        checkbox.innerHTML = this.createIcon("M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16", "20px", "20px");
        taskCard.appendChild(checkbox);

        //Title
        const title = document.createElement("span");
        title.classList.add("task__title");
        title.textContent = task.title;
        taskCard.appendChild(title);

        //Priority
        const priorityBtn = document.createElement("button");
        priorityBtn.classList.add("task__priority");
        priorityBtn.innerHTML = this.createIcon("M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z", "16px", "16px");
        taskCard.appendChild(priorityBtn);

        //Description
        const description = document.createElement("span");
        description.classList.add("task__description");
        description.textContent = task.description;
        taskCard.appendChild(description);

        //Due Date
        const dueDate = document.createElement("button");
        dueDate.classList.add("task__due-date");
        dueDate.textContent = task.dueDate;
        taskCard.appendChild(dueDate);

        //Due Time
        const dueTime = document.createElement("button");
        dueTime.classList.add("task__due-time");
        dueTime.textContent = task.dueTime;
        taskCard.appendChild(dueTime);

        return taskCard
    }

    renderTaskCards(parent, taskCards) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild)
        };

        for(const taskCard of taskCards) {
            parent.appendChild(taskCard);
        }

    }
}