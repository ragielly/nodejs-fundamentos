import {randomUUID} from 'node:crypto'
import { DataBase } from './database.js'
import { buildRoutePath } from './utils/build-route-path.js'

const database = new DataBase
//criar um array de rotas
export const routes = [
{
    method:'GET',
    path: buildRoutePath('/users'),
    handler:(req,res) =>{
        const user = database.select('users')
        //Early return
        return res.end(JSON.stringify(user))//Converte um objeto ou array JavaScript em texto JSON
    
    }
},
{
    method:'POST',
    path: buildRoutePath('/users'),
    handler:(req,res) =>{
       const{name,email}=req.body 
       const user ={ //criando usuário
            id:randomUUID(),
            name:name,
            email:email,
        }

        database.insert('users',user)
        return res.writeHead(201).end()
    }
},
{
    method:'DELETE',
    path: buildRoutePath('/users/:id'),
    handler:(req,res) =>{

        const {id} = req.params //égar o id

        database.delete('users',id) //chamar o delete
        return res.writeHead(204).end()
    }
},
]