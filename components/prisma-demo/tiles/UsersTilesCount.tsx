import { createSignal } from "solid-js"
import { fetcher } from "../../../store/fetch/Fetcher"

type tileProps = {
    data: number,
}

export default function UsersTilesCount({data}: tileProps){

        return(
        <>
            <div class='bg-gray-50 w-fit p-2 rounded-xl'>
                <p class='p-2 text-xl text-black'>Utilisateurs inscrits :  <span class='font-bold'>{data}</span></p>
            </div>
        </>)
}