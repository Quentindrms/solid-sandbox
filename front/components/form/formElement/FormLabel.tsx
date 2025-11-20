type FormLabelProps = {
    text: string,
    htmlFor: string,
}

export function FormLabel({text, htmlFor}:FormLabelProps){
    return <label class='text-lg font-medium underline' id='formLabel' for={htmlFor}>{text}</label>
}