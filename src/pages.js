import { renderTodoForm, renderTodoList } from "./widgets";

export function HomePage() {
    const main = document.createElement("main");
    main.className = "main";
    main.append(renderTodoForm());
    main.append(renderTodoList())
    return main
}