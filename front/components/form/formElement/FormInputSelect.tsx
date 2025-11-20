import { For } from "solid-js"

type FormInputSelectProps = {
    selectName: string,
    option: { value: string, name: string }[],
    required: boolean
    onChange?: (e:Event) => void,
}

export default function FormInputSelect({ selectName, option, required, onChange}: FormInputSelectProps) {

    return (
        <>
            <select class='bg-gray-200 p-2 m-2 rounded-md'name='priority' id={`${selectName}-select`} required={required} onChange={onChange}>
                <option value=''>Veuillez choisir une option</option>
                <For each={option}>
                    {(item, index) =>
                        <option value={item.value}>{item.name}</option>
                    }
                </For>
            </select>

        </>)
}