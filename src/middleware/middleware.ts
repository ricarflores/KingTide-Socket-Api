import {Request, Response, NextFunction} from 'express'
import ApiKey from '../models/apiKeys'

export const validateApiKey = async (request: Request, response:Response, next:NextFunction) =>{
    try{    
        let token = request.headers.authorization;
        if(!token){
            return response.status(401).send({
                success:false,
                error:true,
                errorAuth:true,
                message:"no token found"
            })
        }
        let getTokenInfo = await ApiKey.findOne({api: token})
        if(getTokenInfo && getTokenInfo.active){
            next()
        }else{
            return response.status(401).send({
                success:false,
                error:true,
                errorAuth:true,
                message:"invalid token"
            })
        }
    }catch(err){
        console.log(err)
        return response.status(401).send({
            success:false,
            error:true,
            errorAuth:true,
            message:"process error"
        })
    }
}