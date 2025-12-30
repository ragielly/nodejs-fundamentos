export async function json(req,res){
    const buffers = [] // cria um array de buffers / pedacinhos 

        for await (const chunk of req){// permite percorrer cada pedacinho e 
            buffers.push(chunk) // adicionar esses pedacinhos no array de buffers
        }

        
        try{
            req.body =JSON.parse(Buffer.concat(buffers).toString()) // transformar em json
            
        }catch{
            req.body=null // se tiver vazio , define como null

        }
}