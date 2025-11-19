import prisma from "../../database/prisma";

export default function LoadDatabase(){

    console.log('=== DATABASE ====')
    console.log(import.meta.env.DATABASE_URL)
    prisma;

    return(<></>);
}