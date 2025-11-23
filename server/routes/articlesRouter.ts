import { Router } from "express";
import { ArticlesController } from "../controllers/ArticlesController";

const articlesRouter:Router = Router();

articlesRouter.get('/count-low-quantity', (request, response) =>{
    const articleController = new ArticlesController(request, response);
    articleController.getLowQuantityCount();
})

export default articlesRouter;