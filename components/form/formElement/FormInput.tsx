type FormInputProps = {
    name: string,
    type: 'text' | 'email',
    onChange: (e: Event) => void,
}

export function FormInput({name, type, onChange}:FormInputProps){
    return(<input class={`${name} border-1 border-teal-700 max-w-md`} type={type} id='' onChange={onChange} name={name}></input>)
}