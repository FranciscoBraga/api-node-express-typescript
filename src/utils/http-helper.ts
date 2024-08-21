import { HttpResponse } from "../model/http-response-model"


export const ok = async (data:any):Promise<HttpResponse> =>{
    return {
        status:200,
        body:data
    }
}

export const noContent = async ():Promise<HttpResponse> =>{
    return {
        status:204,
        body:null
    }
}

export const badRequest= async():Promise<HttpResponse> =>{
    return {
        status:400,
        body:null
    }
}

export const  created = async():Promise<HttpResponse> =>{
    return {
        status:201,
        body:{
            message:"sucessful"
        }
    }
}