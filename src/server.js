import http from 'node:http' // importação modulos internos

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

const users = []
//criando servidor
const server = http.createServer(async(req, res) => { // recebe dois parametros (request , response)
    const {method,url} = req //desestruturação de objeto
    //console.log(method,url)//imprime no terminal qual método e qual rota foram chamadas.
    
    const buffers = [] // cria um array de buffers / pedacinhos 

    for await (const chunk of req){// permite percorrer cada pedacinho e 
        buffers.push(chunk) // adicionar esses pedacinhos no array de buffers
    }

    
    try{
        req.body =JSON.parse(Buffer.concat(buffers).toString()) // transformar em json
        
    }catch{
        req.body=null // se tiver vazio , define como null

    }

    if(method =='GET' && url == '/users'){
        //Early return
        return res
         .setHeader('Content-type', 'application/json')//cabeçalhos
         .end(JSON.stringify(users))//Converte um objeto ou array JavaScript em texto JSON
    }
    if(method == 'POST' && url == '/users'){
        const{name,email}=req.body 
        users.push({ //criando usuário
            id:1,
            name:name,
            email:email,
        })
        return res.end('Criação de Usuarios')
    }

    return res.end('Hello World') // retornar mensagem
})

server.listen(3333) // servidor ouça a porta 3333
// localhost:3333