import http from 'node:http'
import { Transform } from 'node:stream'

class InverseNumberStream extends Transform{ //ler dados de algum ligar escrever dados pra outro lugar
    _transform(chunk, encoding, callback){
        const transformed = Number(chunk.toString()) * -1 // transformando para negativo
        
        console.log(transformed)

        callback(null,Buffer.from(String(transformed)))
    } 
}

//req=> ReadeblaStream
//res=> Writable Stream
const server = http.createServer((req,res)=>{
    return req
    .pipe(new InverseNumberStream())
    .pipe(res)
})
server.listen(3334)
