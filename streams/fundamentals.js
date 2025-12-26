// Netflix & Spotify

// Importação de clientes via CSV (Excel)
// 1gb - 1.000.000
// POST /upload import.csv

// 10mb/s - 100s

// 100s -> Inserção no banco de dados

// 10mb/s -> 10.000

// Readable Streams / Writable Streams


//stream -> 
// process.stdin.// tudo que eu estou recendo entrada
// pipe( process.stdout)// encaminhando para a saída

import { Readable } from 'node:stream'

class OneToHundredStream extends Readable{
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
new OneToHundredStream()
.pipe(process.stdout)