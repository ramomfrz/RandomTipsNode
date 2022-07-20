import DicasModel from "../Models/DicasModel.js"
import DataBaseDicas from "../Utils/DatabaseDicas.js"

class Dicas {
    static rotas(app) {
        app.get("/Dicas", (req, res) => {
            const criarDicas = DataBaseDicas.gerarDicas();
            res.status(200).json(criarDicas);
        })

        app.post("/criar", (req, res) => {
            const tips = new DicasModel(...Object.values(req.body));
            const response = DataBaseDicas.adicionarDicas(tips);
            res.status(200).json(response);
        })
    }
}

export default Dicas;