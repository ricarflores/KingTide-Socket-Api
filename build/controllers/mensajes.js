"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRoom = exports.searchTalkId = exports.savePrivateMensaje = void 0;
const privateMessage_1 = __importDefault(require("../models/privateMessage"));
const privateRoom_1 = __importDefault(require("../models/privateRoom"));
async function savePrivateMensaje(from, to, type, mensaje, idTalk) {
    try {
        if (idTalk) {
            return await privateMessage_1.default.insertMany({
                from,
                to,
                type,
                mensaje,
                idTalk
            });
        }
        else {
            return await privateMessage_1.default.insertMany({
                from,
                to,
                type,
                mensaje
            });
        }
    }
    catch (error) {
        console.log(error);
        throw Error(error);
    }
}
exports.savePrivateMensaje = savePrivateMensaje;
async function searchTalkId(user1, user2) {
    try {
        let data = await privateRoom_1.default.aggregate([
            {
                $match: {
                    users: { $in: [user1] }
                }
            },
            {
                $match: {
                    users: { $in: [user2] }
                }
            }
        ]);
        return data[0];
    }
    catch (error) {
        console.log(error);
        throw Error(error);
    }
}
exports.searchTalkId = searchTalkId;
async function createRoom(user1, user2) {
    try {
        let users = [];
        users.push(user1);
        users.push(user2);
        let data = await privateRoom_1.default.insertMany({
            users: users
        });
        return data[0];
    }
    catch (error) {
        console.log(error);
        throw Error(error);
    }
}
exports.createRoom = createRoom;
