import { Router } from "express";
export const router = Router();
import { TodoController } from "../controllers/todoController.js";
import { validate } from "../middlewares/validate.js";
import { todoSchema } from "../schemas/todoSchema.js";


router.get("/", TodoController.getAll);
router.post("/", validate(todoSchema as any), TodoController.create);
router.put("/:id", validate(todoSchema as any), TodoController.update);
router.patch("/:id", validate(todoSchema.partial() as any), TodoController.update);
router.delete("/:id", TodoController.delete);

export default router;


