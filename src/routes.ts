import { Router } from "express";
import * as PlayerController from "./controllers/player-controller";

const router = Router()

router.get('/players',PlayerController.getPlayers)
router.get('/players/:id',PlayerController.getPlayerByID)

router.post('/players',PlayerController.postPlayers)


export default router