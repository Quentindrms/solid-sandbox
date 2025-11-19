import { usePageContext } from "vike-solid/usePageContext";
import { PageContext } from "vike/types"
import { HelloFormDataType } from "../../../type/formDataType";
import ElementsTile from "../../../components/tile/ElementsTile";
import TitleH2 from "../../../components/title/title-h2-bold";

export default function SubmitHelloForm(){
    
    const pageContext = usePageContext();

    function getDataFromUrl(pageContext:PageContext){
        const queryParams = pageContext.urlParsed.search;
        return queryParams as HelloFormDataType;
    }

    const formData = getDataFromUrl(pageContext);


    return(
    <>
        <TitleH2 color="emerald" text="Affichage des informations soumises"></TitleH2>
        <ElementsTile flexDirection="col" gap={0}>
            <p>{formData.nom}</p>
            <p>{formData.prenom}</p>
            <p>{formData.mail}</p>
            <p>{formData.age}</p>
            <p>{formData.description}</p>
        </ElementsTile>
    </>)
}