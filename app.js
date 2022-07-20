import express from "express";
import Dicas from "./src/controllers/Dicas.js"

const port = process.env.PORT || 3000
const app = express()

app.listen(port, () => {
    console.log(`Servidor online em http://localhost:${port}`)
})
app.use(express.json())

Dicas.rotas(app);
