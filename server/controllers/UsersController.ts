import { Controller } from "../libs/Controller";
import prisma from "../database/Prisma";

export class UsersController extends Controller {

    async getAllUsers() {
        const result = await prisma.utilisateurs.findMany({
            orderBy: {
                utilisateur_id: 'asc',
            }
        });
        this.response.json({ result });
    }

    async getAllUsersMail() {
        const result = await prisma.utilisateurs.findMany({
            select: {
                email: true,
            }
        })
        this.response.json({ result });
    }

    async getAllUsersIdentity() {
        const result = await prisma.utilisateurs.findMany({
            select: {
                nom: true,
                prenom: true,
                email: true,
                est_actif: true,
            }
        })
        this.response.json({ result });
    }

    async getIdentityByEmail(email: string) {
        console.log('email : ', email)
        const result = await prisma.utilisateurs.findUnique({
            where: {
                email: email,
            },
            select: {
                nom: true,
                prenom: true,
                email: true,
                est_actif: true,
            }
        })
        this.response.json({ result });
    }

    async changeUserStatus(id: number, status: boolean) {
        console.log('ID : ', id, 'Nouveaux status :', status);
        const result = await prisma.utilisateurs.update({
            where: {
                utilisateur_id: id,
            },
            data: {
                est_actif: status,
            }
        })
        this.response.json({result});
    }

    async updateUser(id: number, nom: string, prenom: string, email: string){
        console.log('Modification utilisateur n°', id);
        const result = await prisma.utilisateurs.update({
            where:{
                utilisateur_id: id
            },
            data:{
                nom: nom,
                prenom: prenom,
                email: email,
            }
        })
        console.log(result);
        this.response.json(result);
    }

}