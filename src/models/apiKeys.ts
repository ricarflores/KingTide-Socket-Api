import { Schema, model, Document } from 'mongoose';

export interface IApiKey extends Document {
    api:string,
    dateCreate: Date,
    active:Boolean
}

const ApiKeySchema = new Schema({
    api:{type:String},
    dateCreate:{type:Date, default:Date.now},
    active:{type:Boolean, default:false}
},{collection: 'apiKeys' }
)

export default model<IApiKey>('ApiKey', ApiKeySchema)