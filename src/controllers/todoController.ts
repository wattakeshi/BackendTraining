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
        const { taskname, done } = req.body;
        const newTask = { id: idCounter, taskname, done }
        data.push(newTask);
        idCounter++
        res.status(201).send({ message: "Task created succesfully!" })
    },
    //PUT
    update: (req: Request, res: Response) => {
        const { taskname, done } = req.body;
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
        const index = data.findIndex(tsk => tsk.id === Number(id))
        if (index === -1) { return res.status(404).send({ message: "task not found" }) }

        data[index] = {
            ...data[index],
            ...req.body
        };
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
