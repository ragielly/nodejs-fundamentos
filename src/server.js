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


//criando servidor
const server = http.createServer((req, res) => { // recebe dois parametros (request , response)
    
    const {method,url} = req //desestruturação de objeto
    //console.log(method,url)//imprime no terminal qual método e qual rota foram chamadas.

    if(method =='GET' && url == '/users'){
        //Early return
        return res.end('Listagem de Usuarios')
    }
    if(method == 'POST' && url == '/users'){
        return res.end('Criação de Usuarios')
    }

    return res.end('Hello World') // retornar mensagem
})

server.listen(3333) // servidor ouça a porta 3333
// localhost:3333