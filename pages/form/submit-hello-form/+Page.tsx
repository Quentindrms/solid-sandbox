import { Show } from "solid-js";

import ElementsTile from "../../../components/tile/ElementsTile";
import TitleH2 from "../../../components/title/title-h2-bold";
import { formData } from "../../../store/form/helloFormStore";
import TitleH3 from "../../../components/title/title-h3-bold";

export default function SubmitHelloForm() {
        console.log('Formdata', formData);
    return (
        <>
            <TitleH2 color="emerald" text="Affichage des informations soumises" intensity="500"></TitleH2>
            <ElementsTile flexDirection="col" gap={0}>
                <Show when={formData.nom} fallback={<TitleH3 color="emerald" text="Aucune information transmise par le formulaire"></TitleH3>}>
                    <p>Nom: {formData.nom}</p>
                    <p>Prénom : {formData.prenom}</p>
                    <p>Mail : {formData.mail}</p>
                    <p>Age : {formData.age}</p>
                    <p>Description : {formData.description}</p>
                </Show>
            </ElementsTile>
        </>)
}