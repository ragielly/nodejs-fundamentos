import http from 'node:http' // importação modulos internos
import { json } from './middlewares/json.js'
import {randomUUID} from 'node:crypto'
import { DataBase } from './middlewares/database.js'

// -Criar usuários
// -Listagem usuários
// -Edição de usuários
// -Remoção de usuários

// -HTTP
// -Método HTTP
// -URL

// GET, POST, PUT, PATCH, DELETE

//GET => Busca um recurso do back-end
//POST => Cria um recurso do back-end
//PUT => Atualiza um recurso no back-end
//PATCH => Atualizar uma informação específica  de um recurso no back-end 
//DELETE =>Deletar um recurso do back-end.

//stateful: dados de memoria armazenado localmente - stateless

//JSON - JavaScript Object Notation

const database = new DataBase
//criando servidor
const server = http.createServer(async(req, res) => { // recebe dois parametros (request , response)
    const {method,url} = req //desestruturação de objeto
    //console.log(method,url)//imprime no terminal qual método e qual rota foram chamadas.
    await json(req,res)

    if(method =='GET' && url == '/users'){
        const user = database.select('users')
        //Early return
        return res.end(JSON.stringify(user))//Converte um objeto ou array JavaScript em texto JSON
    }
    if(method == 'POST' && url == '/users'){
        const{name,email}=req.body 
       const user ={ //criando usuário
            id:randomUUID(),
            name:name,
            email:email,
        }

        database.insert('users',user)
        return res.end('Criação de Usuarios')
    }

    return res.end('Hello World') // retornar mensagem
})

server.listen(3333) // servidor ouça a porta 3333
// localhost:3333