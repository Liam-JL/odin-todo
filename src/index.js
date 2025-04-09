import "./shared/styles/style.css"
import "./shared/styles/sidebar.css"
import "./shared/styles/add-project-modal.css"
import { HomePage } from "./pages"
import { renderProjectsBar} from "./widgets";
import { getCurrentProject, setCurrentProject} from "./shared/project_state-manager";
import { getProjects } from "./shared/lib";

//Set inbox as default project when app starts
if(!getCurrentProject()){
    setCurrentProject(getProjects()[0])
}

document.getElementById("app");
app.append(HomePage());
app.append(renderProjectsBar());

