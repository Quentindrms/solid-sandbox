import { PrismaClient } from '../generated/prisma/client'

const createPrisma = (prisma: PrismaClient) => {
    return new PrismaClient();
}

export type PrismaInstance = ReturnType<typeof createPrisma>;

class Prisma{
    private static instance: PrismaInstance;

    public static getInstance(): PrismaInstance{
        if(!Prisma.instance){
            Prisma.instance = createPrisma(new PrismaClient({}));
        }
        return Prisma.instance;
    }
}

const prisma = Prisma.getInstance();

export default prisma;