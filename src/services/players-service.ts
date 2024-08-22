import { PlayerMode } from "../model/player-model"
import  * as PlayersRepository from "../repositories/player-repository"
import { badRequest, created, noContent, ok } from "../utils/http-helper"


export const getPlayersService = async()=>{

    const data  = await PlayersRepository.findAllPlayers()
    
    return   (data) ? ok(data) : noContent()
}
export const getPlayersByIdService = async(id:number)=>{

    const data = await PlayersRepository.findPlayersById(id)

    return (data) ? ok(data) : noContent()
}

export const postCreatePlayersService = async(players:PlayerMode)=>{

    let response;

    if(Object.keys(players).length != 0){
        await PlayersRepository.insertPlayer(players)
        response  = created() 
    }else{
        response = badRequest()
    }
    
    return  response

}

export const  deletePlayerService = async (id: number)=> {
    
    const data = await PlayersRepository.deletePlayer(id)

    return (data) ? ok(data) : noContent()

}

