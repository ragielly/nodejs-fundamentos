import {Readable} from 'node:stream'

class OneToHundredStream extends Readable{// leitura
    index = 1

    _read(){
        const i = this.index++
        setTimeout(()=>{
            if (i > 5) {
                this.push(null) // finaliza o stream
            } else {
                const buf = Buffer.from(String(i) + '\n')
                this.push(buf)
            }
        },1000)
    }
}

fetch('http://localhost:3334',{ //É uma requisição HTTP usando fetch.
    method:'POST',// simula um envio de informação.// GET não faz sentido
    body: new OneToHundredStream(),
    duplex:'half'//enviar dados enquanto ainda recebe a resposta
}).then(response =>{
    return response.text()
}).then(data => {
    console.log(data)
})