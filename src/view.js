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

    
}