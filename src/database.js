import fs from 'node:fs/promises'

const databasePath = new URL('../db.json',import.meta.url)



export class DataBase{
    #database = {}

    constructor(){
        fs.readFile(databasePath, 'utf8')
         .then(data => {
            this.#database = JSON.parse(data)
         })
         .catch(()=>{
            this.#persist()
         })
    }
    //metodo privado responsavel por salvar os dados no arquivo
    #persist(){
        // Converte o objeto JavaScript em string JSON e grava no arquivo db.json
        fs.writeFile(databasePath, JSON.stringify(this.#database))
    }

    select(table){ //listar tabela

        // Tenta acessar a tabela no objeto database
        // Se a tabela não existir, retorna um array vazio
        const data = this.#database[table] ?? [] 
        return data
    }
    insert(table,data){ //inserir usuario

        // Verifica se já existe uma tabela e se ela é um array
        if(!Array.isArray(this.#database[table])){ 
            this.#database[table] = []    
        }
            
        this.#database[table].push(data)

        this.#persist();
        
        return data;
    }
}