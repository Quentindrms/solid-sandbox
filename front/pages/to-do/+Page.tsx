
import { FormInput } from "../../components/form/formElement/FormInput";
import ElementsTile from "../../components/tile/ElementsTile";
import TitleH2 from "../../components/title/title-h2-bold";
import TitleH3 from "../../components/title/title-h3-bold";

import { createSignal } from "solid-js";

type TaskType = {
    nom: string,
    valeur: string,
    en_cours: boolean,
}

export default function TodoList() {

    const [listData, setListData] = createSignal<TaskType>({
        nom: '',
        valeur: '',
        en_cours: false,
    })

    const handleInputChange = (field: keyof TaskType) => (e: Event) => {
        const target = e.target as HTMLInputElement
        setListData(prev => ({
            ...prev,
            [field]: target.value
        }))
    }

    return (
        <>
            <TitleH2 color="emerald" text="To do list" />
            <ElementsTile flexDirection="col" gap={3}>
                <TitleH3 color="emerald" text="" />
                <div class='flex flex-row'>
                    <FormInput name="task" onChange={handleInputChange('nom')} require type="text"/>
                </div>
            </ElementsTile>
        </>
    )
}