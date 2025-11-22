import { createEffect, createSignal, For, Show, Suspense } from "solid-js";
import PrimaryButton from "../../components/button/PrimaryButton";
import TitleH2 from "../../components/title/title-h2-bold";
import { useData } from "vike-solid/useData";
import { changeStatus, updateUser } from "./+data";
import { UserType } from "../../type/users/usersType";
import ElementsTile from "../../components/tile/ElementsTile";
import { reload } from "vike/client/router";
import UpdateUserForm, { formDataType } from "../../components/form/UpdateUserForm";


export default function PrismaDemo() {

    const fetchedData = useData<UserType[]>();

    createEffect(() => {
        console.log('Modification sur data', data());
    })

    const [focusUser, setFocusUser] = createSignal<UserType>({
        utilisateur_id: 0,
        date_creation: '',
        email: '',
        est_actif: false,
        mot_de_passe: '',
        nom: '',
        prenom: '',
        role_id: 0,
    })

    const [data, setData] = createSignal(fetchedData);
    const [formOpen, setFormOpen] = createSignal(false);
    const [formData, setFormData] = createSignal<formDataType>({
        nom: '',
        prenom: '',
        email: '',
    })

    function handleClick(id: number) {
        setFocusUser(data()[id])
        setFormOpen(false);
    }

    async function handleUserToggle() {
        const newData = setFocusUser((prev) => {
            return {
                ...prev,
                est_actif: !prev.est_actif
            }
        })
        await changeStatus(newData.utilisateur_id, newData.est_actif);
        await reload();
    }

    async function handleUserUpdate(updatedData: formDataType) {
        setFormData((prev) => {
            return {
                ...prev,
                ...updatedData,
            }
        })
        console.log('Update : ', formData());
        try {
            await updateUser(focusUser().utilisateur_id, formData().nom, formData().prenom, formData().email);
        } catch {
            console.error('Erreur lors de la mise à jour utilisateur');
        }
        finally {
            const newFocusUser = setFocusUser((prev) => {
                return {
                    ...prev,
                    ...updatedData
                }
            })
            setFormOpen(!formOpen());
            await reload();
        }
    }

    function handleToggleButtonClick() {
        handleUserToggle();
    }

    function parseDate(input: string) {
        const date = new Date(input)
        const output = date.toLocaleDateString();
        return output
    }

    function handleUpdateForm() {
        setFormOpen(!formOpen());
        console.log('formOpen :', formOpen())
    }

    return (
        <>
            <TitleH2 color="emerald" text="Prisma démo" />

            <div class='flex flex-row gap-4'>
                <ElementsTile flexDirection="col" gap={2}>
                    <Suspense fallback='Chargement des données'>
                        <For each={data()}>
                            {(item, index) => (
                                <div class='border-gray-200 border-2 rounded-md p-3' onClick={() => handleClick(index())}>
                                    <p class='font-bold'>Utilisateur numéro : {item.utilisateur_id} </p>
                                    <p>{item.nom} {item.prenom}</p>
                                    <p class='italic'>{item.email}</p>
                                </div>)
                            }
                        </For>
                    </Suspense>
                </ElementsTile>

                <div class='flex flex-col gap-2'>
                    <ElementsTile flexDirection="col" gap={2}>
                        <Show when={focusUser().utilisateur_id} fallback={'Cliquez sur un utilisateur pour afficher les détails'}>
                            <p class="text-center font-bold text-xl text-emerald-700">{focusUser().prenom} {focusUser().nom}</p>
                            <p>Nom : {focusUser().nom}</p>
                            <p>Penom : {focusUser().prenom}</p>
                            <p>Email: {focusUser().email}</p>
                            <p>Est actif : {focusUser().est_actif ? 'Oui' : 'Non'}</p>
                            <p>Date de création : {parseDate(focusUser().date_creation)}</p>
                            <div class='flex justify-center p-2 gap-2'>
                                <PrimaryButton
                                    color="green" text={focusUser().est_actif ? "Désactiver l'utilisateur" : "Activer l'utilisateur"}
                                    onClick={() => handleToggleButtonClick()}
                                />
                                <PrimaryButton color="green" text={"Modifier l'utilisateur"} onClick={() => handleUpdateForm()} />
                            </div>
                        </Show>
                    </ElementsTile>
                    <Show when={formOpen()}>
                        <ElementsTile flexDirection="col" gap={2}>
                            <UpdateUserForm onSubmit={handleUserUpdate} initialData={
                                {
                                    nom: focusUser().nom,
                                    prenom: focusUser().prenom,
                                    email: focusUser().email,
                                }
                            } />
                        </ElementsTile>
                    </Show>
                </div>
            </div >
        </>)
}