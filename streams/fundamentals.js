// Netflix & Spotify

// Importação de clientes via CSV (Excel)
// 1gb - 1.000.000
// POST /upload import.csv

// 10mb/s - 100s

// 100s -> Inserção no banco de dados

// 10mb/s -> 10.000

// Readable Streams:eu forneço dados / Writable Streams:eu recebo dados


//stream -> 
// process.stdin.// tudo que eu estou recendo entrada
// pipe( process.stdout)// encaminhando para a saída

import { Readable, Transform, Writable } from 'node:stream'

class OneToHundredStream extends Readable{// leitura
    index = 1

    _read(){
        const i = this.index++
        setTimeout(()=>{
            if (i > 100) {
                this.push(null) // finaliza o stream
            } else {
                const buf = Buffer.from(String(i) + '\n')
                this.push(buf)
            }
        },1000)
    }
}

class InverseNumberStream extends Transform{ //ler dados de algum ligar escrever dados pra outro lugar
    _transform(chunk, encoding, callback){
        const transformed = Number(chunk.toString()) * -1 // transformando para negativo

        callback(null,Buffer.from(String(transformed)))
    } 
}

class MultiplyByTenStream extends Writable { //escrever dados
    _write(chunk, encoding, callback){// Chunk é um pedaço dos dados lidos,
    // encoding indica como a informação está codificada,
    //  e o callback é uma função que é chamada quando o processamento desses dados é concluído.
        console.log(Number(chunk.toString()) * 10)
        callback()//encerrar
    }
}



new OneToHundredStream()
.pipe(new InverseNumberStream())
.pipe(new MultiplyByTenStream())