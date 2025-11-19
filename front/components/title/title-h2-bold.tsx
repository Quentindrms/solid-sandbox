import type { AvailaibleColor, ColorIntensity } from "../../type/colorType";

import clsx from "clsx";

type TitleH2Props = {
    color: AvailaibleColor;
    intensity: ColorIntensity;
    text: string;
}

export function TitleH2({text, color, intensity}:TitleH2Props){

    return(<h2 class={clsx(['font-bold', `text-${color}-500`, 'text-5xl',  'm-1', 'p-1'])}>{text}</h2>)
}

export default TitleH2;