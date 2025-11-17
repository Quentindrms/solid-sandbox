import type { AvailaibleColor } from "../../type/colorType";

type TitleH3Props = {
    color: AvailaibleColor;
    text: string;
}

export function TitleH3({text, color}:TitleH3Props){

    return(<h3 class={`font-bold text-${color}-500 text-3xl m-5 p-1`}>{text}</h3>)
}

export default TitleH3;