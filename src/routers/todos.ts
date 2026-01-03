import { Router } from "express";
export const router = Router();
import { TodoController } from "../controllers/todoController.js";


router.get("/", TodoController.getAll);
router.post("/", TodoController.create);
router.put("/:id", TodoController.update);
router.patch("/:id", TodoController.patch);
router.delete("/:id", TodoController.delete);

export default router;


