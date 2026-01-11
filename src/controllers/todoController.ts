import type { Request, Response } from "express";
import { todoSchema } from "../schemas/todoSchema.js";
import { prisma } from "../lib/prisma.js";

export const TodoController = {
    //get
    getAll: async (req: Request, res: Response) => {
        try {
            const userId = (req as any).user.userId
            const tasks = await prisma.task.findMany({
                where: { userID: userId },
                orderBy: {
                    createdAt: "desc"
                }
            });
            res.json(tasks)
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: "Erro ao encontrar Tasks!" })
        }
    },

    //post
    create: async (req: Request, res: Response) => {
        const { taskname, done } = req.body;
        const userId = (req as any).user.userId;
        try {
            const newTask = await prisma.task.create({
                data: {
                    taskname: taskname,
                    done: done ?? false,
                    userID: userId
                }

            })
            res.status(201).send({ message: "Task created succesfully!", newTask })
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "erro ao criar task" })
        }

    },
    //PUT
    update: async (req: Request, res: Response) => {
        const { taskname, done } = req.body;
        const { id } = req.params;
        const userId = (req as any).user.userId
        try {
            const update = await prisma.task.update({
                where: { id: Number(id), userID: userId },
                data: {
                    done: done,
                    taskname: taskname
                }
            })
            res.status(201).send({ message: "Task updated succesfully!", update })
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Fail to update the task" })
        }
    },


    //delete
    delete: async (req: Request, res: Response) => {
        const deleteID = Number(req.params.id);
        const userId = (req as any).user.userId
        try {
            const remove = await prisma.task.delete({
                where: { id: Number(deleteID), userID: userId }
            })
            res.status(200).send({ message: "Task deleted successfully" });
            if (remove.count == 0) {
                return res.status(404).json({ error: "Task nao encontrada, ou usuario sem permissão!" })
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "fail to delete task!" })
        }


    }

}
