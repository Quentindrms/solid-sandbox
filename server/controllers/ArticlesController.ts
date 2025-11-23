import prisma from "../database/Prisma";
import { Controller } from "../libs/Controller";

export class ArticlesController extends Controller{

    async getArticlesCount(){
        const result = await prisma.articles.count();
        this.response.json(result);
    }

    async getLowQuantityCount(){
        const result = await prisma.articles.count({
            where: {
                quantite_en_stock: {
                    lte: 10
                }
            }
        })
        this.response.json(result);
    }

    async getArticleDetails(id:number){
        console.log('id : ', id)
        const result = await prisma.articles.findFirst({
            where:{
                article_id:{
                    equals:id
                }
            }
        })
        this.response.json(result);
    }


}