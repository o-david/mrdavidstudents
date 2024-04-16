import express from "express"
import { registerUser, resendCode, verifyMail } from "../controllers/userController.js"


const router = express.Router()

router.route('/').post(registerUser)
router.post('/verifyMail', verifyMail )
router.post('/resendCode', resendCode )

export default router
