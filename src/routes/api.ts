import express from "express";
import * as apiService from '../controllers/apiService';
const router = express.Router()

router.get('/public', async (_req, res) =>{
    let mensajes:any = [];
    try{
        mensajes = await apiService.getAllMensagess();
    }catch(err:any){
        console.log(err)
        return res.status(500).send(err)
    }finally{
        if(mensajes.length !=0)
        {
            return res.status(200).send(mensajes)
        }else{
            return res.status(404).send("Mensajes no found")
        }
    }
})

router.get('/private', async(_req,res) =>{
    let mensajes:any = [];
    try{
        mensajes = await apiService.getAllPrivateMensagess();
    }catch(err:any){
        console.log(err)
        return res.status(500).send(err)
    }finally{
        if(mensajes.length !=0)
        {
            return res.status(200).send(mensajes)
        }else{
            return res.status(404).send("Mensajes no found")
        }
    }
})

router.get('/create/apiKey', async(_req, res) =>{
    let key = await apiService.cretaApiKey();
    if(key){
        return res.status(200).send(key)
    }else{
        return res.status(500).send("Some error")
    }
})

router.get('/apiKey/:apiId', async(req, res) =>{
    try{
        const id:string = req.params.apiId;
        let responseUpdate = await apiService.activeApiKey(id);
        return res.status(200).send(responseUpdate)
    }catch(err:any){
        console.log(err)
        return res.status(400).send("Error in api key activation")
    }
})
router.get('/apiKey/delete/:id', async(req,res)=>{
    try{
        const id:string = req.params.id;
        let deleteAction = await apiService.deleteApiKey(id);
        res.status(200).send({success: deleteAction})
    }catch(err:any){
        console.log(err)
        return res.status(400).send("Error delete api key")
    }
})

export default router;