import { Request, Response } from "express"
import { getPlayersService } from "../service/players-service"
import { ok } from "../utils/http-helper"

export const getPlayers = async (request:Request,reponse:Response)=>{

    const httpResponse = await getPlayersService()
    reponse.status(httpResponse.status).json(httpResponse.body)
}