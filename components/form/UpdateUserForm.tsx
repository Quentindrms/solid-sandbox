import { createSignal } from "solid-js";
import { FormInput } from "./formElement/FormInput";
import { FormInputSubmit } from "./formElement/FormInputSubmit";
import { FormLabel } from "./formElement/FormLabel";

export type formDataType = {
    nom: string,
    prenom: string,
    email: string,
}

type UpdateUserFormProps = {
    initialData?: formDataType;
    onSubmit: (data: formDataType) => void;
}

export default function UpdateUserForm({ initialData, onSubmit }: UpdateUserFormProps) {

    const [formData, setFormData] = createSignal<formDataType>({
        nom: '',
        prenom: '',
        email: ''
    });

    const handleInputChange = (field: keyof formDataType) => (e: Event) => {
        const target = e.target as HTMLInputElement;
        setFormData(prev => ({
            ...prev,
            [field]: target.value
        }))
        console.log(formData());
    }

    function handleSubmit(e: Event) {
        e.preventDefault();
        onSubmit(formData());
    }

    return (
        <>
            <form class='flex flex-col' onSubmit={(e: Event) => handleSubmit(e)}>
                <FormLabel text="Nom"></FormLabel>
                <FormInput name="nom" onChange={handleInputChange("nom")} require type="text" />
                <FormLabel text="Prénom"></FormLabel>
                <FormInput name="prenom" onChange={handleInputChange("prenom")} require type="text" />
                <FormLabel text="Email"></FormLabel>
                <FormInput name="email" onChange={handleInputChange("email")} require type="email" />
                <FormInputSubmit name="submit" text="Enregistrer les modifications" />
            </form>
        </>)


}