import { Request, Response } from "express"
import * as Service from "../services/players-service"

export const getPlayers = async (request:Request,reponse:Response)=>{

    const httpResponse = await Service.getPlayersService()

    reponse.status(httpResponse.status).json(httpResponse.body)
}

export const getPlayerByID = async(request:Request, reponse:Response)=>{
   
    const id = parseInt(request.params.id)
 
    const httpResponse = await Service.getPlayersByIdService(id)
   
    reponse.status(httpResponse.status).json(httpResponse.body)
}

export const postPlayer = async(request:Request,reponse:Response)=>{

    const body = request.body 

    const httpResponse = await Service.postCreatePlayersService(body)

    reponse.status(httpResponse.status).json(httpResponse.body)
}

export const deletePlayer = async (request:Request,reponse:Response)=>{
   
     const id = parseInt(request.params.id)
      
     const httpResponse = await Service.deletePlayerService(id)

    reponse.status(httpResponse.status).json(httpResponse.body)
}

export const patchStatistics = async (request:Request,reponse:Response)=>{
   
    const id = parseInt(request.params.id)
    
    const bodyValue  = request.body    
     
    const httpResponse = await Service.patchPlayerServive(id,bodyValue)

   reponse.status(httpResponse.status).json(httpResponse.body)
}
