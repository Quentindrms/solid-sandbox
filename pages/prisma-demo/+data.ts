import { fetcher } from "../../store/fetch/Fetcher";
import type { fetcherParameters } from "../../store/fetch/Fetcher";

export type Data = {
    userCount: number,
    activeUserCount: number,
    lowQuantityCount: number,
    articlesCount: number,
};

export default async function data(){

    const data: Data = {
        userCount: await getUserCount(),
        activeUserCount: await getActiveUsers(),
        lowQuantityCount: await getLowQuantityCount(),
        articlesCount: await getArticlesCounts(),
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


async function getLowQuantityCount(){
    const info: fetcherParameters = {
        road: "articles",
        endpoint: "count-low-quantity",
    }
    const result = await fetcher(info);
    return result;
}

    async function getArticlesCounts(){
        const info: fetcherParameters = {
            road: "articles",
            endpoint: "count-articles",
        }
        const result = await fetcher(info);
        return result;
    }