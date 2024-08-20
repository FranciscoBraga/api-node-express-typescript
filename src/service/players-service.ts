import { noContent, ok } from "../utils/http-helper"


export const getPlayersService = async()=>{

    const data  =  {name:"Beckham"}
    
    return   (data) ? ok(data) : noContent()
}