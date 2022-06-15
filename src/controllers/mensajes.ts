import  PrivateMensajes from '../models/privateMessage';
import Rooms from '../models/privateRoom';


export async function savePrivateMensaje(from:string, to:string, type:string, mensaje:string, idTalk?: string) {
    try{
        if(idTalk)
        {
            return await PrivateMensajes.insertMany(
                {
                    from,
                    to,
                    type,
                    mensaje,
                    idTalk
                }
            );
        }else{
            return await PrivateMensajes.insertMany(
                {
                    from,
                    to,
                    type,
                    mensaje
                }
            );
        }
        
    }catch(error:any){
        console.log(error)
        throw Error(error)
    }
}

export async function searchTalkId(user1:string, user2:string) {
    try
    {
        let data=[];
        if(user1 === user2) {
            data = await Rooms.aggregate([
                {
                    $match:{
                        "users.0": user1
                    }
                },
                {
                    $match:{
                        "users.1":user2
                    }
                }
            ]);
        }
        else{
            data = await Rooms.aggregate([
                {
                    $match:{
                        users:{$in:[user1]}
                    }
                },
                {
                    $match:{
                        users:{$in:[user2]}
                    }
                }
            ]);
        }
        return data[0];
    }catch(error:any){
        console.log(error)
        throw Error(error)
    }
}

export async function createRoom(user1:string,user2:string) {
    try{
        let users = [];
        users.push(user1);
        users.push(user2);
        let data =  await Rooms.insertMany(
            {
                users: users
            }
        )
        return data[0];
    }catch(error:any){
        console.log(error)
        throw Error(error)
    }
    
}