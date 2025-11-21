import 'dotenv/config';
import { PrismaClient } from '../generated/client';
import { PrismaPg } from '@prisma/adapter-pg';

class Prisma {

    private static instance: PrismaClient;

    public static getInstance(): PrismaClient {
        const connectionString = `${process.env.DATABASE_URL}` || undefined;
        if (!Prisma.instance) {
            const adapter = new PrismaPg({ connectionString })
            Prisma.instance = new PrismaClient({
                adapter: adapter,
            },
        );
        }
        return Prisma.instance;
    }
}

const prisma = Prisma.getInstance();

export default prisma;