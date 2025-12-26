import http from 'node:http'
import { Transform } from 'node:stream'

class InverseNumberStream extends Transform{ //ler dados de algum lugar e escrever dados pra outro lugar
    _transform(chunk, encoding, callback){
        const transformed = Number(chunk.toString()) * -1 // transformando para negativo
        
        console.log(transformed)

        callback(null,Buffer.from(String(transformed)))
    } 
}

//req=> ReadeblaStream
//res=> Writable Stream
const server = http.createServer( async (req,res)=>{
    const buffers = [] // cria um array de buffers / pedacinhos 

    for await (const chunk of req){// permite percorrer cada pedacinho e 
        buffers.push(chunk) // adicionar esses pedacinhos no array de buffers
    }

    const fullStreamContent = Buffer.concat(buffers).toString()

    console.log(fullStreamContent)

    return res.end(fullStreamContent)
//     return req
//     .pipe(new InverseNumberStream())
//     .pipe(res)
})
server.listen(3334)
