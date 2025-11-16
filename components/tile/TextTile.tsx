import { type JSX } from "solid-js"

export default function TextTile(props: {children?:JSX.Element}){


    return(<div class='w-lg h-fit text-justify bg-gray-50 p-4 rounded-md'>
        {props.children}
    </div>)
}