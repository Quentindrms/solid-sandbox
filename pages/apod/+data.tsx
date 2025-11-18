
export {data}; 

import { PageContext } from "vike/types";
import type { ApodType } from "../../type/data";

async function data(pageContext:PageContext){

    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${import.meta.env.NASA_API_KEY}`);
    const apod: ApodType = await response.json();

    return apod;
}