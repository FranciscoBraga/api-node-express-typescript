interface HttpResponse{
    status:number,
    body:any
};

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