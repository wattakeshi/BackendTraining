import { Router } from "express";
export const router = Router();
import { TodoController } from "../controllers/todoController.js";
import { validate } from "../middlewares/validate.js";
import { todoSchema } from "../schemas/todoSchema.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";


router.get("/", TodoController.getAll);
router.post("/", authMiddleware, validate(todoSchema as any), TodoController.create);
router.put("/:id", authMiddleware, validate(todoSchema as any), TodoController.update);
router.patch("/:id", authMiddleware, validate(todoSchema.partial() as any), TodoController.update);
router.delete("/:id", authMiddleware, TodoController.delete);

export default router;


