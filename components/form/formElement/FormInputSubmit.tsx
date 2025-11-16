type FormInputProps = {
    name: string,
    text: string,
    onClick: (e:Event) => void,
}

export function FormInputSubmit({name, text, onClick}:FormInputProps){
    return(<button class={`btn text-stone-200 w-3xs p-2 rounded-md bg-emerald-700 p-2`} onClick={onClick} type='submit' name={name}>{text}</button>)
}