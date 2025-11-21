import { Controller } from "../libs/Controller";
import prisma from "../database/Prisma";

export class UsersController extends Controller{

    async getAllUsers(){
        const result = await prisma.utilisateurs.findMany();
        this.response.json({result});
    }

}