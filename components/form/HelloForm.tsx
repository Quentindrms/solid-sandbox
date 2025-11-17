import { createSignal } from "solid-js";
import { FormInput } from "./formElement/FormInput";
import { FormInputSubmit } from "./formElement/FormInputSubmit";
import { FormLabel } from "./formElement/FormLabel";
import ElementsTile from "../tile/ElementsTile";

import type { HelloFormDataType } from "../../type/formDataType";
import FromTextField from "./formElement/FormTextField";
import FormTextField from "./formElement/FormTextField";


export function HelloForm() {

    const [formData, setFormData] = createSignal<HelloFormDataType>({
        nom: '',
        prenom: '',
        mail: '',
        age: '',
        description: '', 
    });

    const [isSubmitted, setIsSubmitted] = createSignal(false);

    const handleInputChange = (field: keyof HelloFormDataType) => (e: Event) => {
        const target = e.target as HTMLInputElement;
        setFormData(prev => ({
            ...prev,
            [field]: target.value
        }));
    };

    const handleSubmit = (e: Event) => {
        e.preventDefault();
        setIsSubmitted(true);
    }
    return (
        <div class='flex flex-row gap-15'>
            <form class='flex flex-col w-md max-w-lg gap-1' onSubmit={(e: Event) => handleSubmit(e)} method='get' action='/form/submit-hello-form'>
                <FormLabel htmlFor="nom" text="Nom" />
                <FormInput name="nom" onChange={handleInputChange('nom')} type="text" require={true}/>
                <FormLabel htmlFor="prenom" text="Prénom" />
                <FormInput name="prenom" onChange={handleInputChange('prenom')} type="text" require={true}/>
                <FormLabel htmlFor="mail" text="Adresse mail" />
                <FormInput name="mail" onChange={handleInputChange('mail')} type="email" require={true} />
                <FormLabel htmlFor="age" text="Votre age" />
                <FormInput name="age" onChange={handleInputChange('age')} type="text" require={true}/>
                <FormLabel htmlFor="description" text="Description" />
                <FormTextField onChange={handleInputChange('description')}/>

                <FormInputSubmit name="" text="Soumettre" onClick={() => console.log('click')} />
            </form>
            {isSubmitted() && (
                <>
                    <ElementsTile flexDirection="col" gap={1}>
                        <p>Nom : {formData().nom}</p>
                        <p>Prénom : {formData().prenom}</p>
                        <p>Mail : {formData().mail}</p>
                        <p>Age : {formData().age}</p>
                        <p>Description : {formData().description}</p>
                    </ElementsTile>
                </>
            )}
        </div>
    )}