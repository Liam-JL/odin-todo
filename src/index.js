import "./shared/styles/style.css"
import "./shared/styles/sidebar.css"
import "./shared/styles/add-project-modal.css"
import { HomePage } from "./pages"
import { renderProjectsBar} from "./widgets";
import { initializeDefaultAppState } from "./features";


initializeDefaultAppState();
document.getElementById("app");
app.append(HomePage());
app.append(renderProjectsBar());

