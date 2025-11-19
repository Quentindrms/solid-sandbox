import type { AvailaibleColor } from "../../type/colorType";

type TitleH3Props = {
    color: AvailaibleColor;
    text: string;
}

export function TitleH3({text, color}:TitleH3Props){

    return(<h3 class={`font-bold text-${color}-500 text-5xl m-2 p-3`}>{text}</h3>)
}

export default TitleH3;