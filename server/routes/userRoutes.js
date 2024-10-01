import express from "express"
import { approveUserViaLink, checkAuth, login, signup } from "../controllers/auth.controller.js"
import { admin, verifyToken } from "../middlewares/verifyToken.js";


const router = express.Router()

router.route('/').post(signup)
router.get('/approve', approveUserViaLink);
router.post('/login', login )
router.get("/check-auth", verifyToken, checkAuth);


// router.post('/verifyMail', verifyMail )
// router.post('/resendCode', resendCode )


export default router
