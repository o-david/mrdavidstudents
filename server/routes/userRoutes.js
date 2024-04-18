import express from "express"
import { authenticateUser, registerUser, resendCode, verifyMail } from "../controllers/userController.js"


const router = express.Router()

router.route('/').post(registerUser)
router.post('/verifyMail', verifyMail )
router.post('/resendCode', resendCode )
router.post('/login', authenticateUser )


export default router
