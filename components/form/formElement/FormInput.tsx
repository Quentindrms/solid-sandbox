type FormInputProps = {
    name: string,
    type: 'text' | 'email',
    onChange: (e: Event) => void,
    require: true | false,
}

export function FormInput({name, type, onChange, require}:FormInputProps){
    if(require){
    return(<input required class={`${name} border-1 border-teal-700 max-w-md`} type={type} id='' onChange={onChange} name={name}></input>)
    }
    else{
    return(<input class={`${name} border-1 border-teal-700 max-w-md`} type={type} id='' onChange={onChange} name={name}></input>)
    }
}