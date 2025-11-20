import { createSignal, For, Show } from "solid-js";

import { FormInput } from "../../components/form/formElement/FormInput";
import { FormInputSubmit } from "../../components/form/formElement/FormInputSubmit";
import ElementsTile from "../../components/tile/ElementsTile";
import TitleH2 from "../../components/title/title-h2-bold";
import FormInputSelect from "../../components/form/formElement/FormInputSelect";
import type { TaskType } from "../../type/data";
import Task from "../../components/toDoList/Task";
import { FormLabel } from "../../components/form/formElement/FormLabel";
import FormTextField from "../../components/form/formElement/FormTextField";

export default function TodoList() {

    const [list, setList] = createSignal<TaskType[]>([]);
    const [inputValue, setInputValue] = createSignal<TaskType>({ isFinished: false, name: '', value: '', description: '' });

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
            setInputValue({ isFinished: false, name: '', value: '', description: '' });
        }
    }

    function handleDelete(id: number) {
        const newList = [...list()];
        newList.splice(id, 1);
        setList(newList);
    }

    return (
        <>
            <TitleH2 color="emerald" text="To do list" />
            <div class='flex flex-row gap-2'>
                <ElementsTile flexDirection="row" gap={2}>
                    <form class='flex flex-col gap-5' onSubmit={(e) => handleSubmit(e)}>
                        <FormLabel htmlFor="task" text="Nom de la tâche" />
                        <FormInput name="task" require onChange={handleInputChange('name')} type="text" />
                        <FormLabel htmlFor="priority" text="Priorité"></FormLabel>
                        <FormInputSelect option={[{ value: 'low', name: 'Basse' },
                        { value: 'medium', name: 'Moyenne' }, { value: 'high', name: 'Haute' }]}
                            selectName="priority"
                            required={true}
                            onChange={handleInputChange('value')}
                        />
                        <FormLabel htmlFor="texField" text="Description" />
                        <FormTextField onChange={handleInputChange("description")} />
                        <FormInputSubmit name="submit" text="Ajouter" />
                    </form>
                </ElementsTile>
                <Show when={list().length} >
                    <ElementsTile flexDirection="col" gap={5}>
                        <For each={list()} >
                            {(item, index) =>
                                <Task taskName={item.name} taskPriority={item.value} isFinished={item.isFinished} description={item.description} trashBehaviour={() => handleDelete(index())} />
                            }
                        </For>
                    </ElementsTile>
                </Show>


            </div >
        </>
    )
}