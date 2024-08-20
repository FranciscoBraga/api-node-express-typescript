import { Request, Response } from "express"
import { getPlayersService } from "../services/players-service"

export const getPlayers = async (request:Request,reponse:Response)=>{

    const httpResponse = await getPlayersService()
    console.log(httpResponse.body)
    reponse.status(httpResponse.status).json(httpResponse.body)
}