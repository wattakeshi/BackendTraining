import Router from "express";
import type { ITask } from "../types/ITask.js";
export const router = Router();
let data: ITask[] = [
    {
        id: 1,
        taskname: "Limpar o quarto",
        done: false
    },
    {
        id: 2,
        taskname: "Terminar o backend",
        done: false
    },
    {
        id: 3,
        taskname: "Pagar Spotify",
        done: false
    },]

let idCounter = 4;

router.get("/todos", (req, res) => {
    res.send(
        {
            message: "todoList", data

        }
    )
})

router.get("/todos/:id", (req, res) => {
    const task = data.find(tsk => tsk.id == Number(req.params.id))
    if (!task) {
        return res.status(404).send({ message: "task not found" })
    }

    res.send({ message: "getting response from ID:", "task": task })

})
// POST

router.post(`/todos/`, (req, res) => {
    const id = idCounter;
    const { taskname } = req.body;
    if (!taskname) {
        return res.status(400).json({ message: "Sem nome da tarefa!" })
    }
    const newTask = {
        id: idCounter,
        taskname: taskname,
        done: false,
    };
    data.push(newTask);
    idCounter++;
    res.status(201).json(newTask);
})
// DELETE

router.delete("/todos/:id", (req, res) => {
    const reqId = Number(req.params.id);
    //procurar dentro do array find que criei la em cima
    const check = data.find(t => t.id === reqId)
    if (!check) {
        return res.status(404).json({ message: "ID da tarefa não existe" })
    }
    const newData = data.filter(t => t.id !== check.id)
    data = newData

    res.json({ message: "Tarefa removida com sucesso", id: reqId })
})