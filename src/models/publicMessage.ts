import { Schema, model, Document } from 'mongoose';

export interface IMensaje extends Document {
    from: string,
    to: string,
    type:string,
    mensaje: string
}

const MensajeSchema = new Schema(
    {
        from:{type:String, required:true},
        to:{type:String, required: true},
        type:{type: String, required: true},
        mensaje:{type:String, required:true},
        date: {type:Date, default:Date.now}
    },
    { collection: 'Mensajes' }
)

export default model<IMensaje>('Mensajes', MensajeSchema)