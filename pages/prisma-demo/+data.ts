import { fetcher } from "../../store/fetch/Fetcher";
import type { fetcherParameters } from "../../store/fetch/Fetcher";

export type Data = {
    userCount: number,
    activeUserCount: number,
};

export default async function data(){

    const data: Data = {
        userCount: await getUserCount(),
        activeUserCount: await getActiveUsers(),
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

async function getActiveUsers(){
    const info: fetcherParameters = {
        road: "users",
        endpoint: "count-active-users"
    }
    const result = await fetcher(info);
    return result; 
}