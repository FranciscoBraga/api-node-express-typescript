import {ClubModel} from "../model/club-model"
import fs from "fs/promises";


const dataBase: ClubModel[]=[
    {
        id:1,
        name:"Fluminense"
 }
]

export const findAllClubs = async():Promise<ClubModel[]>=>{
    const data =  await fs.readFile("./src/data/database.json","utf-8")
    const clubs : ClubModel[] = JSON.parse(data)
 return clubs
}


