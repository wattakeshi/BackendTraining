import { AuthController } from "../controllers/authController.js";
import Router from "express";
export const router = Router();

router.post("/", AuthController.register)
router.post("/login", AuthController.login)

export default router