import DicasModel from "../Models/DicasModel.js"
import DatabaseDicas from "../Utils/DatabaseDicas.js"

class Dicas {
    static rotas(app) {
        app.get("/tips", (req, res) => {
            const criarDicas = DatabaseDicas.gerarDicas();
            res.status(200).json(criarDicas);
        })

        app.post("/create", (req, res) => {
            const tips = new DicasModel(...Object.values(req.body));
            const response = DatabaseDicas.adicionarDicas(tips);
            res.status(200).json(response);
        })
    }
}

export default Dicas;