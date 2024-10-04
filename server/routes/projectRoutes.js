import express from "express"
import { verifyToken } from "../middlewares/verifyToken.js";
import { addProject } from "../controllers/project.controller.js";


const router = express.Router()

router.route('/')
.post(verifyToken, addProject)




export default router
