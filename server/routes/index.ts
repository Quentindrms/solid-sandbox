import {Router} from "express";
import { GlobalController } from "../controllers/GlobalController";
import usersRouter from "./usersRouter";
import articlesRouter from "./articlesRouter";
import commandesRouter from "./commandesRouter";

const mainRouter:Router = Router();
mainRouter.use('/users', usersRouter);
mainRouter.use('/articles', articlesRouter);
mainRouter.use('/commandes', commandesRouter);

mainRouter.get('/', (request, response) => {
        const controller = new GlobalController(request, response);
        controller.hello();
})

export default mainRouter;