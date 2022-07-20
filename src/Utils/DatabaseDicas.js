import { Database } from "../Utils/Database.js"

class DatabaseMetodos {
    static listarTodoBanco() {
        return Database;
    }

    static gerarDicas() {
        let x = Math.random() * Database.Dicas.lenght;
        x = Math.floor(x);
        return Database.Dicas.lenght >= 1 ? Database.Dicas[x] : Database.Dicas;

    }

    static adicionarDicas(dica) {
        Database.Dicas = [...Database.Dicas, dica];
        return Database.Dicas;
    }

}

export default DatabaseMetodos;

