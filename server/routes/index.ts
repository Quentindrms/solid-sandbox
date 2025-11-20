import {Router} from "express";
import { GlobalController } from "../controllers/globalController";

const mainRouter:Router = Router();

mainRouter.get('/', (request, response) => {
        const controller = new GlobalController(request, response);
        controller.hello();
})

export default mainRouter;