
type FormtextFieldProps = {
    onChange: (e:Event) => void,
}

export default function FormTextField({onChange}: FormtextFieldProps){

    return(
        <textarea class='max-w-md max-h-xs border-teal-700 border-1' rows={10} onChange={onChange}></textarea>
    )
}