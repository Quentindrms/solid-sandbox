import { Controller } from "../libs/Controller";
import prisma from "../database/Prisma";

export class CommandesControllers extends Controller{

    async getLastFive(){
        const commandesCount = await prisma.commandes.count();
        const result = await prisma.commandes.findMany({
            where:{
                commande_id: {
                    gte: commandesCount-5,
                },
                statut: {
                    equals: 'en cours',
                }
            },
            select:{
                
                date_commande: true,
            }
        })
    }

}