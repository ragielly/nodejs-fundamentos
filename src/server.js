import http from 'node:http' // importação modulos internos
import { json } from './middlewares/json.js'
import {routes} from './routes.js'

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
        return route.method == method && route.path.test(url)
    })

    if(route){
        //testa a URL com a regex da rota e extrai os parâmetros da URL
        const routeParams = req.url.match(route.path)

        req.params = { ...routeParams.groups }//pegar o id

        

        return route.handler(req,res)
    }

    return res.writable(404).end()
})

server.listen(3333) // servidor ouça a porta 3333