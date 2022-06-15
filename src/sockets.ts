import {Server, Socket } from 'socket.io';
import Mensaje from './models/publicMessage';
import {savePrivateMensaje, searchTalkId, createRoom} from './controllers/mensajes'
export default (io: Server) =>{
    io.on('connection', (socket: Socket) =>
    {
        //Get all Mensajes
        socket.on("mensaje",async (nombre:string, mensaje:string) => {
            let mensajeDoc ={
                from: nombre,
                to: 'world',
                type: 'public',
                mensaje: mensaje,
            }
            await Mensaje.insertMany(mensajeDoc)
            io.emit("mensajes", {nombre, mensaje})
        });
        //Private rooms and messages
        socket.on("privateMensaje", async(to:string, from: string, mensaje:string) =>{
            let idTalk = await searchTalkId(to,from);
            if(!idTalk)
            {
                let room = await createRoom(from, to)
                await savePrivateMensaje(from, to,"private", mensaje, room['idTalk'])
                idTalk = await searchTalkId(to,from);
            }
            else
            {
                await savePrivateMensaje(from, to,"private", mensaje, idTalk['idTalk'])
            }
            io.emit(idTalk['idTalk'], {from, mensaje})
        })
    })
}