import * as ClubRepository from "../repositories/club-repository";
import { noContent, ok } from "../utils/http-helper";
import { HttpResponse } from "../model/http-response-model";


export  const  getClubsService = async():Promise<HttpResponse>=>{

    const data = await ClubRepository.findAllClubs()

    return (data) ? ok(data) : noContent()

}