import http from 'node:http' // importação modulos internos

//criando servidor
const server = http.createServer((req, res) => { // recebe dois parametros (request , response)
    return res.end('Hello Wold') // retornar mensagem
})

server.listen(3333) // servidor ouça a porta 3333
// localhost:3333