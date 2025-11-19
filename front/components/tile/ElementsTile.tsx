import { type JSX } from "solid-js"

type ElementsTileProps = {
    gap: number,
    flexDirection: 'row' | 'col',
    children?: JSX.Element,
} 

export default function ElementsTile(props: ElementsTileProps){

    return(<div class={`w-lg h-fit text-justify bg-gray-50 p-4 rounded-md flex flex-${props.flexDirection} gap-${props.gap} align-center`}>
        {props.children}
    </div>)
}