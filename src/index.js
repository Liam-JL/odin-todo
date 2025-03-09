import "./styles.css"
import {TaskRepository, TaskService, ProjectRepository, ProjectService} from "./model"

const tasks = new TaskService(new TaskRepository);
tasks.createTask(["Do a thing"])
tasks.createTask(["Do another thing"])
console.log(tasks.taskRepo.tasks)

const taskId = tasks.taskRepo.tasks[1].id
tasks.updateTask(taskId, ["Do many things instead"])
console.log(tasks.taskRepo.tasks)






