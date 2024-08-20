import  * as PlayersRepository from "../repositories/player-repository"
import { noContent, ok } from "../utils/http-helper"


export const getPlayersService = async()=>{

    const data  = await PlayersRepository.findAllPlayers()
    console.log(data)
    return   (data) ? ok(data) : noContent()
}