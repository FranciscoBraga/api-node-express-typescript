import express,{json, Request,Response} from "express"

const app = express()
const port = process.env.PORT

app.use(json())

app.get("/",(request:Request,reponse:Response)=>{
    reponse.status(200).json({name:"Beckham"})
})

app.listen(port,()=>{
    console.log(`🔥 Server running at port htpp://localhost:${port}`)
})

