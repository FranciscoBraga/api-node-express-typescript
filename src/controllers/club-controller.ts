import { Request, Response } from "express";
import * as Service from "../services/club-service";


export const getClubs = async(request:Request,response:Response)=>{

    const httpResponse = await Service.getClubsService()

    response.status(httpResponse.status).json(httpResponse.body)

}