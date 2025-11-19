import TitleH2 from "../../components/title/title-h2-bold";
import TitleH3 from "../../components/title/title-h3-bold";

import { useData } from "vike-solid/useData";
import type { Data } from "./+data";
import TextTile from "../../components/tile/TextTile";

export default function Apod() {
    const { apod } = useData<Data>();
    return (<>
        <TitleH2 color="emerald" text="Astronomic Picture of the Day" />
        <TitleH3 color="emerald" text={apod.title} />
        <div class='flex flex-row gap-4 '>
            <img class='max-w-lg border-1 border-emerald-500' src={apod.url} >{apod.title}</img>
            <div class='flex flex-col gap-2'>
                <TextTile>{apod.explanation}</TextTile>
                <TextTile>{apod.date}</TextTile>
            </div>
        </div>
    </>)
}