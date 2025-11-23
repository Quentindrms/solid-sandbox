import { Router } from "express";
import { CommandesControllers } from "../controllers/CommandesController";

const commandesRouter: Router = Router();

commandesRouter.get('/get-last-five', (request, response) => {
    const commandesController = new CommandesControllers(request, response);
    commandesController.getLastFive();
})

export default commandesRouter;