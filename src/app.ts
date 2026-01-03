import express from "express";
import { TodoRouter } from "./routers/index.js"
import cors from "cors"
const app = express();
const port = 3000;
app.use(express.json())
app.use(cors())
app.get("/", (req, res) => {
    res.send({ message: "HelloWorld!" })
})
app.use("/todos", TodoRouter)
app.listen(port, () => {
    console.log(`Servidor funcionando na porta: ${port}`)
})