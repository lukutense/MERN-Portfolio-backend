import {connectDB} from './db.js'
import {nuevoDato} from './routes/schema.js'

import express from 'express'
const app = express()
const port = 4000

import http from 'http'
import {Server as socketServer} from 'socket.io'
import cors from 'cors'


//Connect DataBase
connectDB()

//socket
const server = http.createServer(app)
const io = new socketServer(server, {
    cors: {
        origin: '*',
    }
})

app.use(cors())

io.on('connection', (socket)=>{
    console.log(socket.id);
    console.log('conexion socket frontend con localhost 4000');

    socket.on('datoNuevo', async data=>{
        const newData=new nuevoDato(data)
        const savedNote= await newData.save()
    })        
})

//Config server basic
app.get('/', (req, res) => res.send('Hello World!'))
server.listen(port, () => console.log(`Example app listening on port ${port}!`))
