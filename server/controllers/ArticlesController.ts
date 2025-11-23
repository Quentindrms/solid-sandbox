import prisma from "../database/Prisma";
import { Controller } from "../libs/Controller";

export class ArticlesController extends Controller{

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


}