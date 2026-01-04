export class DataBase{
    #database = {}

    select(table){ //listar tabela

        // Tenta acessar a tabela no objeto database
        // Se a tabela não existir, retorna um array vazio
        const data = this.#database[table] ?? [] 
        return data
    }
    insert(table,data){ //inserir usuario

        // Verifica se já existe uma tabela e se ela é um array
        if(Array.isArray(this.#database[table])){ 
             // Se for um array, adiciona o novo dado ao final
            this.#database[table].push(data)
        }else{
            this.#database[table] = data
        }
        return data
    }
}