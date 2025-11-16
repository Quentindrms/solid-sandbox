import type { AvailaibleColor } from "../../type/colorType";

type TitleH2Props = {
    color: AvailaibleColor;
    text: string;
}

export function TitleH2({text, color}:TitleH2Props){

    return(<h2 class={`font-bold text-${color}-500 text-5xl m-1 p-1`}>{text}</h2>)
}

export default TitleH2;