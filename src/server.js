import http from 'node:http' // importação modulos internos
import { json } from './middlewares/json.js'
import {routes} from './routes.js'

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


//criando servidor
const server = http.createServer(async(req, res) => { // recebe dois parametros (request , response)
    const {method,url} = req //desestruturação de objeto
    //console.log(method,url)//imprime no terminal qual método e qual rota foram chamadas.
    await json(req,res)

    const route = routes.find(route =>{
        return route.method == method && route.path == url
    })

    if(route){
        return route.handler(req,res)
    }
    
    return res.writable(404).end()
})

server.listen(3333) // servidor ouça a porta 3333
// localhost:3333