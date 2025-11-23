import { fetcher } from "../../store/fetch/Fetcher";
import type { fetcherParameters } from "../../store/fetch/Fetcher";

export type Data = {
    userCount: number,
};

export default async function data(){

    const data: Data = {
        userCount: await getUserCount(),
    }
    return data as Data;
}

async function getUserCount(){
    const info:fetcherParameters = {
        road: "users",
        endpoint: "count-users",
    }
    const result = await fetcher(info);
    return result; 
}