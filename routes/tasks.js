import express from "express";

import  tasks from "../controllers/tasks.js";

const router =express.Router();
const app = express();





router.route("/").get(tasks.getAllTasks).post(tasks.createTask);
router.route("/:id").get(tasks.getTask).patch(tasks.updateTask).delete(tasks.deleteTask);

  

export default router;
