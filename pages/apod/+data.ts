import type { ApodType } from "../../type/data.js";

export type Data = Awaited<ReturnType<typeof data>>;

export async function data(){

    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${import.meta.env.NASA_API_KEY}`);
    const apod: ApodType = await response.json();
    return {apod};
}