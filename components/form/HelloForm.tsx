import { createSignal } from "solid-js";
import { navigate } from "vike/client/router";

import { FormInput } from "./formElement/FormInput";
import { FormInputSubmit } from "./formElement/FormInputSubmit";
import { FormLabel } from "./formElement/FormLabel";
import ElementsTile from "../tile/ElementsTile";
import type { HelloFormDataType } from "../../type/formDataType";
import FormTextField from "./formElement/FormTextField";
import { formData, setFormData } from "../../store/form/helloFormStore";
import PrimaryButton from "../button/PrimaryButton";



export function HelloForm() {

    const [isSubmitted, setIsSubmitted] = createSignal(false);

    const handleInputChange = (field: keyof HelloFormDataType) => (e: Event) => {
        const target = e.target as HTMLInputElement;
        setFormData(prev => ({
            ...prev,
            [field]: target.value
        }));
    };

    const handlePreSubmit = (e: Event) => {
        e.preventDefault();
        setIsSubmitted(true);
    }

    const handleSubmit = (e: Event) => {
        console.log('Handl submit');
        navigate('/form/submit-hello-form');
    }

    return (
        <div class='flex flex-row gap-15'>
            <form class='flex flex-col w-md max-w-lg gap-1' onSubmit={(e: Event) => handlePreSubmit(e)} method='get' action='/form/submit-hello-form'>
                <FormLabel htmlFor="nom" text="Nom" />
                <FormInput name="nom" onChange={handleInputChange('nom')} type="text" require={true} />
                <FormLabel htmlFor="prenom" text="Prénom" />
                <FormInput name="prenom" onChange={handleInputChange('prenom')} type="text" require={true} />
                <FormLabel htmlFor="mail" text="Adresse mail" />
                <FormInput name="mail" onChange={handleInputChange('mail')} type="email" require={true} />
                <FormLabel htmlFor="age" text="Votre age" />
                <FormInput name="age" onChange={handleInputChange('age')} type="text" require={true} />
                <FormLabel htmlFor="description" text="Description" />
                <FormTextField onChange={handleInputChange('description')} />

                <FormInputSubmit name="" text="Valider" onClick={() => console.log('click')} />
            </form>
            {isSubmitted() && (
                <>
                    <ElementsTile flexDirection="col" gap={1}>
                        <p>Nom : {formData.nom}</p>
                        <p>Prénom : {formData.prenom}</p>
                        <p>Mail : {formData.mail}</p>
                        <p>Age : {formData.age}</p>
                        <p>Description : {formData.description}</p>
                        <PrimaryButton color="purple" text="Soumettre le formulaire" onClick={(e: Event) => handleSubmit(e)} />
                    </ElementsTile>
                </>
            )}
        </div>
    )
}