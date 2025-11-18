import TextTile from "../../components/tile/TextTile";
import TitleH2 from "../../components/title/title-h2-bold";
import TitleH3 from "../../components/title/title-h3-bold";

import type { ApodType } from "../../type/data";
import { useData } from "vike-solid/useData";

export default function Apod() {

    const apod: ApodType = useData<ApodType>();
    console.log(apod.url);

    return (<>
        <TitleH2 color="emerald" text="Astronomic Picture of the Day" />
        <TitleH3 color="emerald" text={apod.title} />
        <div class='flex flex-row gap-3 p-5'>
            <img src={apod.url} class='border-2 border-emerald-500 max-w-md' />
            <div class='flex flex-col gap-2'>
                <TextTile>
                    {apod.explanation}
                </TextTile>
                <TextTile>
                    Publish date : <span class='font-bold text-emerald-700'>{apod.date}</span>
                </TextTile>
            </div>
        </div>
    </>)
}