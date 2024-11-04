import express from "express";
import {
  approveUserViaLink,
  checkAuth,
  getProfile,
  googleAuth,
  googleCallback,
  login,
  signup,
  updateUser,
} from "../controllers/auth.controller.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = express.Router();

router.route("/").post(signup);
router.get("/approve", approveUserViaLink);
router.post("/login", login);
router.get("/check-auth", verifyToken, checkAuth);
router.get("/google", googleAuth);

router.get("/google/callback", googleCallback);
router.put('/update-user',verifyToken, updateUser);
router.get("/:username", getProfile);


// router.post('/verifyMail', verifyMail )
// router.post('/resendCode', resendCode )

export default router;
