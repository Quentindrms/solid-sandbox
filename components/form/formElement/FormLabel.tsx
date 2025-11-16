type FormLabelProps = {
    text: string,
    htmlFor: string,
}

export function FormLabel({text, htmlFor}:FormLabelProps){
    return <label class='' id='formLabel' for={htmlFor}>{text}</label>
}