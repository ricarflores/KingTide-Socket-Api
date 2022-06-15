import { Schema, model, Document } from 'mongoose';
import { randomBytes } from 'crypto'
export interface IPrivateRoom extends Document {
    users:[string],
    idTalk: string
}

const PrivateRoomSchema = new Schema(
    {
        users:[String],
        idTalk:{type:String, default: randomBytes(16).toString("hex")}
    },
    { collection: 'Rooms' }
)

export default model<IPrivateRoom>('Rooms', PrivateRoomSchema)