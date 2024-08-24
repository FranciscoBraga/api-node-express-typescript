import {ClubModel} from "../model/club-model"



const dataBase: ClubModel[]=[
    {
        id:1,
        name:"Fluminense"
}
]

export const findAllClubs = async():Promise<ClubModel[]>=>{
    console.log(dataBase)
 return dataBase
}


