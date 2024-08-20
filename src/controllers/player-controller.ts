import { Request, Response } from "express"

export const getPlayers = (request:Request,reponse:Response)=>{
    reponse.status(200).json({name:"Beckham"})
}