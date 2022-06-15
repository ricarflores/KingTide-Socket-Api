import {MensajeI} from '../types'
import Mensaje from '../models/publicMessage';
import ApiKey from '../models/apiKeys'
import { randomBytes } from 'crypto'


export const getAllMensagess = async ():Promise<MensajeI[]> =>{
    try{
        let msg = await Mensaje.aggregate([
            {
                $match:{
                    type:"public"
                }
            }
        ]);
        return msg;
    }catch(err:any){
        console.log(err)
        return[];
    }
}

export const getAllPrivateMensagess = async():Promise<MensajeI[]> =>{
    try
    {
        let privateMsg = await Mensaje.aggregate([
            {
                $match:{
                    type:"private"
                }
            }
        ]);
        return privateMsg;
    }catch(err:any){
        console.log(err);
        return[]
    }
}

export const cretaApiKey = async ():Promise<Object> =>{
    try{
        let key = randomBytes(32).toString("hex");
        let resSave = await ApiKey.insertMany([
            {
                api:key
            }
        ]);
        return resSave
    }catch(err:any){
        console.log(err)
        return {err:err}
    }
}

export const activeApiKey = async (id:string):Promise<Object> =>{
    try
    {
        let resUpdate = await ApiKey.updateOne(
            {api: id},
            {$set:{
                active:true
            }}
        );
        return resUpdate;
    }catch(err:any){
        console.log(err)
        return {err:err}
    }
}

export const deleteApiKey = async (id:string):Promise<Boolean> => {
    try{
        let delAcction = await ApiKey.updateOne(
            {api: id},
            {$set:{
                active:false
            }}
        );
        if(delAcction.acknowledged)
        {
            return true
        }else{
            return false
        }
    }catch(err:any){
        console.log(err)
        return false
    }
}