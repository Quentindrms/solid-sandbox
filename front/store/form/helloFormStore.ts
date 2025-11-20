import { createStore } from "solid-js/store";
import type { HelloFormDataType } from "../../type/formDataType";


export const [formData, setFormData] = createStore<HelloFormDataType>({
        nom: '',
        prenom: '',
        mail: '',
        age: '',
        description: '', 
    });

export default [formData, setFormData];