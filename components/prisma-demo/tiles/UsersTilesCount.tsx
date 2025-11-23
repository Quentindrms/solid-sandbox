import { createSignal } from "solid-js"
import { fetcher } from "../../../store/fetch/Fetcher"

type tileProps = {
    users: number,
    activeUsers: number,
}

export default function UsersTilesCount({users,activeUsers}:tileProps){

        return(
        <>
            <div class='bg-gray-50 w-fit p-2 rounded-xl flex'>
                <p class='p-2 text-xl text-black'>Utilisateurs inscrits :  <span class='font-bold'>{users}</span></p>
                <span class='bg-stone-200 min-h-full w-1'></span>
                <p class='p-2 text-xl text-black'>Utilisateur actif : <span class='font-bold'>{activeUsers}</span></p>
            </div>
        </>)
}