import type { Request, Response } from "express";
import { todoSchema } from "../schemas/todoSchema.js";
import { data } from "../data.js"
let idCounter = 4

export const TodoController = {
    //get
    getAll: (req: Request, res: Response) => {
        res.json(data)
    },
    //post
    create: (req: Request, res: Response) => {
        const result = todoSchema.safeParse(req.body)
        if (!result.success) {
            return res.status(400).json({
                message: "erro de validação, dados insuficientes",
                details: result.error.format()
            })
        }
        const { taskname, done } = result.data;
        const newTask = { taskname, done, id: idCounter }
        data.push(newTask);
        idCounter++
        res.status(200).send({ message: "Task created succesfully!" })
    },
    //PUT
    update: (req: Request, res: Response) => {
        const result = todoSchema.safeParse(req.body);
        if (!result.success) {
            return res.status(400).send({ message: "Erro de validação, dados insuficientes" })
        }
        const { taskname, done } = result.data;
        const { id } = req.params;
        const index = data.findIndex(tsk => tsk.id === Number(id))
        if (index === -1) {
            return res.status(404).send({ message: "task not found" })
        }
        const newTask = {
            taskname: taskname,
            done: done,
            id: Number(id)
        }
        data[index] = newTask
        return res.status(202).send({ message: "Task changed succesfully!" })
    },
    //PATCH
    patch: (req: Request, res: Response) => {
        const { id } = req.params;
        const { taskname, done } = req.body;
        const index = data.findIndex(tsk => tsk.id === Number(id))
        if (index === -1) { return res.status(404).send({ message: "task not found" }) }
        const updatedTask = {
            taskname: taskname !== undefined ? taskname : data[index]?.taskname,
            done: done !== undefined ? done : data[index]?.done,
            id: Number(id)
        }
        data[index] = updatedTask;
        return res.status(200).send({ message: "Task updated succesfully!" })
    },

    //delete
    delete: (req: Request, res: Response) => {
        const deleteID = Number(req.params.id);
        const index = data.findIndex(t => t.id === deleteID);
        if (index === -1) { return res.status(404).send({ message: "Task not found" }) }
        data.splice(index, 1);

        return res.status(200).send({ message: "Task deleted successfully" });
    }

}
