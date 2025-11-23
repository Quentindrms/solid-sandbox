import { Router } from "express";
import { ArticlesController } from "../controllers/ArticlesController";

const articlesRouter:Router = Router();

articlesRouter.get('/count-articles', (request, response) => {
    const articleController = new ArticlesController(request, response);
    articleController.getArticlesCount();
})

articlesRouter.get('/count-low-quantity', (request, response) =>{
    const articleController = new ArticlesController(request, response);
    articleController.getLowQuantityCount();
})

articlesRouter.get('/article-details/:id', (request, response) => {
    const articleController = new ArticlesController(request, response);
    articleController.getArticleDetails(parseInt(request.params.id));
})

export default articlesRouter;