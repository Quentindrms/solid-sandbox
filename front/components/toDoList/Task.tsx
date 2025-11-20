import clsx from 'clsx';
import { FaRegularCircleDot } from 'solid-icons/fa'
import { FaRegularCircleCheck } from 'solid-icons/fa'
import { FaSolidTrashCan } from 'solid-icons/fa'
import { createEffect, createSignal } from 'solid-js';

type TaskProps = {
    taskName: string,
    taskPriority: string,
    isFinished: boolean,
    trashBehaviour: (e:any) => void,
}

export default function Task({ taskName, taskPriority, isFinished, trashBehaviour}: TaskProps) {

    const [finish, setFinish] = createSignal(isFinished);

    createEffect(() => {
        console.log('Finish : ', finish()); 
    })

    function handleFinished(){
        setFinish(!finish());
    }

    function displayPriority(taskPriority:string){
        if(taskPriority == 'low'){
            return 'Basse';
        }
        else if(taskPriority == 'medium'){
            return 'Moyenne';
        }
        else if(taskPriority == 'high'){
            return 'Haute';
        }
        return 'Undefined';
    }

    return (
        <div class='flex flex-row justify-between items-center bg-gray-200 rounded-md p-3 m-1'>
            <div class='flex flex-col justify-around gap-2 max-w-xs'>
                <p class='text-2xl font-medium text-emerald-700' >{taskName}</p>
                <p class='text-lg font-medium'>Priorité : {displayPriority(taskPriority)}</p>
            </div>
            <div class='flex flex-col gap-2 justify-center items-center text-center max-w-2xs'>
                <p class={clsx([finish() ? 'text-green-500' : 'text-blue-500', 'font-bold', 'text-lg', 'text-center'])}>{finish() ? 'Terminé' : 'En cours'}</p>
                {finish() ? <FaRegularCircleDot color='oklch(62.7% 0.194 149.214)' onClick={() => handleFinished()} size={25} class='m-1'/> : <FaRegularCircleCheck onClick={() => handleFinished()} color='oklch(62.7% 0.194 149.214)' size={25} class='m-1'/>}
                <FaSolidTrashCan size={25} class='m-1' onClick={trashBehaviour}/>
            </div>
        </div>
    )
}