import { Schema, model, Document } from 'mongoose';
import { randomBytes } from 'crypto'
export interface IPrivateMensaje extends Document {
    from: string,
    to: string,
    type:string,
    mensaje: string
    idTalk: string
}

const PrivateMessageSchema = new Schema(
    {
        from:{type:String, required:true},
        to:{type:String, required: true},
        type:{type: String, required: true},
        mensaje:{type:String, required:true},
        date: {type:Date, default:Date.now},
        idTalk:{type:String, default: randomBytes(16).toString("hex")}
    },
    { collection: 'Mensajes' }
)

export default model<IPrivateMensaje>('PrivateMensajes', PrivateMessageSchema)


