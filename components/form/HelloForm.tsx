import { createSignal } from "solid-js";
import { FormInput } from "./formElement/FormInput";
import { FormInputSubmit } from "./formElement/FormInputSubmit";
import { FormLabel } from "./formElement/FormLabel";

type formDataType = {
    nom: string,
    prenom: string,
    mail: string,
}

export function HelloForm() {

    const [formData, setFormData] = createSignal<formDataType>({
        nom: '',
        prenom: '',
        mail: '',
    });

    const handleInputChange = (field: keyof formDataType) => (e: Event) => {
        const target = e.target as HTMLInputElement;
        setFormData(prev => ({
            ...prev,
            [field]: target.value
        }));
    };

    const handleSubmit = (e:Event) => {
        e.preventDefault();
        console.log('Données transmises');
        console.log(formData().nom)
    }
    return (
        <>
        <form class='flex flex-col max-w-lg' onSubmit={(e: Event) => e.preventDefault()}>
            <FormLabel htmlFor="nom" text="Nom" />
            <FormInput name="nom" onChange={handleInputChange('nom')} type="text" />
            <FormLabel htmlFor="prenom" text="Prénom" />
            <FormInput name="prenom" onChange={handleInputChange('prenom')} type="text" />
            <FormLabel htmlFor="prenom" text="Adresse mail" />
            <FormInput name="mail" onChange={handleInputChange('mail')} type="email" />
            <FormInputSubmit name="btn submit" text="Soumettre" onClick={handleSubmit} />
        </form>
        <p>{formData().nom}</p>
        <p>{formData().prenom}</p>
        <p>{formData().mail}</p>
        </>

    )

}