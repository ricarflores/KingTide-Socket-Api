"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const publicMessage_1 = __importDefault(require("./models/publicMessage"));
const mensajes_1 = require("./controllers/mensajes");
exports.default = (io) => {
    io.on('connection', (socket) => {
        //User Login
        /*socket.on("conectado", (nomb:string) =>{
            nombre = nomb;
            socket.broadcast.emit('mensajes', {nombre: nombre, mensaje: `${nombre} ah entrado en la sala de chat`})
        });*/
        //Get all Mensajes
        socket.on("mensaje", async (nombre, mensaje) => {
            console.log(nombre);
            console.log(mensaje);
            let mensajeDoc = {
                from: nombre,
                to: 'world',
                type: 'public',
                mensaje: mensaje,
            };
            await publicMessage_1.default.insertMany(mensajeDoc);
            io.emit("mensajes", { nombre, mensaje });
        });
        socket.on("privateMensaje", async (to, from, mensaje) => {
            let idTalk = await (0, mensajes_1.searchTalkId)(to, from);
            if (!idTalk) {
                let room = await (0, mensajes_1.createRoom)(from, to);
                await (0, mensajes_1.savePrivateMensaje)(from, to, "private", mensaje, room['idTalk']);
                idTalk = await (0, mensajes_1.searchTalkId)(to, from);
            }
            else {
                await (0, mensajes_1.savePrivateMensaje)(from, to, "private", mensaje, idTalk['idTalk']);
            }
            io.emit(idTalk['idTalk'], { from, mensaje });
        });
        //User out of chat
        /* socket.on("disconnect", () =>{
            io.emit("mensajes",{servidor: "Servidor", mensaje: `${nombre} ha abandonado la sala`})
        })*/
    });
};
