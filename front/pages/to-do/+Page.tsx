import { createSignal, For } from "solid-js";

import PrimaryButton from "../../components/button/PrimaryButton";
import { FormInput } from "../../components/form/formElement/FormInput";
import { FormInputSubmit } from "../../components/form/formElement/FormInputSubmit";
import ElementsTile from "../../components/tile/ElementsTile";
import TitleH2 from "../../components/title/title-h2-bold";
import { setFormData } from "../../store/form/helloFormStore";
import TextTile from "../../components/tile/TextTile";
import FormInputSelect from "../../components/form/formElement/FormInputSelect";

import type { TaskType } from "../../type/data";
import Task from "../../components/toDoList/Task";

export default function TodoList() {

    const [list, setList] = createSignal<TaskType[]>([]);
    const [inputValue, setInputValue] = createSignal<TaskType>({isFinished:false, name:'', value:''});

    const handleInputChange = (field: keyof TaskType) => (e: Event) => {
        const target = e.target as HTMLInputElement | HTMLSelectElement;
        setInputValue(prev => ({
            ...prev,
            [field]: target.value
        }));
        console.log(target.value);
    }

    function handleSubmit(e: Event) {
        e.preventDefault();
        const value = inputValue();
        console.log('Value', value);
        if (value) {
            setList(prev => [...prev, value]);
            setInputValue({isFinished:false, name:'',value:''});
        }
    }

    function handleDelete(id: number){
        const newList = [...list()];
        newList.splice(id, 1);
        setList(newList);
    }

    return (
        <>
            <TitleH2 color="emerald" text="To do list" />

            <ElementsTile flexDirection="row" gap={2}>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <FormInput name="task" require onChange={handleInputChange('name')} type="text" />
                    <FormInputSelect option={[{ value: 'low', name: 'Basse' },
                    { value: 'medium', name: 'Moyenne' }, { value: 'high', name: 'Haute' }]}
                        selectName="priority"
                        required={true}
                        onChange={handleInputChange('value')}
                    />
                    <FormInputSubmit name="submit" text="Ajouter" />
                </form>
            </ElementsTile>

            <ElementsTile flexDirection="col" gap={5}>
                <For each={list()} >
                    {(item, index) =>
                        <Task taskName={item.name} taskPriority={item.value} isFinished={item.isFinished} trashBehaviour={() => handleDelete(index())}/>
                    }
                </For>
            </ElementsTile>

        </>
    )
}