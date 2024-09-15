import express from "express"
import { approveUserViaLink, signup } from "../controllers/auth.controller.js"


const router = express.Router()

router.route('/').post(signup)
router.get('/approve', approveUserViaLink);

// router.post('/verifyMail', verifyMail )
// router.post('/resendCode', resendCode )
// router.post('/login', authenticateUser )


export default router
