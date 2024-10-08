import express from "express"
import { verifyToken } from "../middlewares/verifyToken.js";
import { addProject, getProjects } from "../controllers/project.controller.js";


const router = express.Router()

router.route('/')
.get(getProjects)
.post(verifyToken, addProject)


export default router
