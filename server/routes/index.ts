import {Router} from "express";
import { GlobalController } from "../controllers/GlobalController";
import usersRouter from "./usersRouter";

const mainRouter:Router = Router();
mainRouter.use('/users', usersRouter);

mainRouter.get('/', (request, response) => {
        const controller = new GlobalController(request, response);
        controller.hello();
})

export default mainRouter;