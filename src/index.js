import "./shared/styles/style.css"
import "./shared/styles/sidebar.css"
import { HomePage } from "./pages"
import { renderProjectsBar } from "./widgets";


document.getElementById("app");
app.append(HomePage());
app.append(renderProjectsBar())
