import app from "./app";
import * as socketIo from 'socket.io'
import http from 'http'
import sockets from "./sockets";
import './database'

const httpServer = http.createServer(app);

const io = new socketIo.Server(httpServer,{
    cors:{
        origin:"*"
    }
});

sockets(io)

httpServer.listen(4000, () =>{
    console.log(`Servirdor en puerto ${4000}`)    
});