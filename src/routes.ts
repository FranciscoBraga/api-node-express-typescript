import { Router } from "express";
import * as PlayerController from "./controllers/player-controller";
import * as ClubController from "./controllers/club-controller";

const router = Router()

router.get('/players',PlayerController.getPlayers)
router.get('/players/:id',PlayerController.getPlayerByID)

router.post('/players',PlayerController.postPlayer)

router.delete('/players/:id',PlayerController.deletePlayer)

router.patch('/players/:id',PlayerController.patchStatistics)

router.get('/clubs',ClubController.getClubs)


export default router