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

//PUT

router.put("/todos/:id", (req, res) => {
    //pegar o ID que foi enviado pelo parametro
    const { id } = req.params;
    //pegar o objeto (taskname: e o done: que veio do body da requisição)
    const { taskname, done } = req.body;
    if (taskname === undefined || done === undefined) {
        return res.status(400).send({ message: "informações não completa, preencha o resto dos dados" })
    }
    //encontrar o index da array do ID
    const index = data.findIndex(t => t.id === Number(id));
    if (index === -1) {
        return res.status(404).send({ message: "Task not found" })
    };

    const updatedTask = {
        ...data[index],
        taskname: taskname,
        done: done,
        id: Number(id)
    }
    data[index] = updatedTask

    res.status(200).send({ message: "Task atualizada com sucesso!" })
})

//patch
//using the same logic from put, but not necessary to put every single info (taskname or done)

router.patch("/todos/:id", (req, res) => {
    const { id } = req.params;
    const { taskname, done } = req.body;
    const index = data.findIndex(t => t.id === Number(id));
    if (index === -1) {
        return res.status(404).send({ message: "Task not found" })
    };

    const updatedTask = {
        ...data[index],
        taskname: taskname !== undefined ? taskname : data[index]?.taskname,
        done: done !== undefined ? done : data[index]?.done,
        id: Number(id)
    }
    data[index] = updatedTask

    res.status(200).send({ message: "Task atualizada com sucesso!" })
})
