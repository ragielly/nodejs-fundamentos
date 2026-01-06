import {randomUUID} from 'node:crypto'
import { DataBase } from './database.js'

const database = new DataBase
//criar um array de rotas
export const routes = [
{
    method:'GET',
    path: '/users',
    handler:(req,res) =>{
        const user = database.select('users')
        //Early return
        return res.end(JSON.stringify(user))//Converte um objeto ou array JavaScript em texto JSON
    
    }
},
{
    method:'POST',
    path: '/users',
    handler:(req,res) =>{
       const{name,email}=req.body 
       const user ={ //criando usuário
            id:randomUUID(),
            name:name,
            email:email,
        }

        database.insert('users',user)
        return res.end('Criação de Usuarios')
    }
}
]