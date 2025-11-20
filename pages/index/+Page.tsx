import '../tailwind.css';


import { createEffect, createSignal, Show } from 'solid-js';
import TitleH2 from '../../components/title/title-h2-bold';
import PrimaryButton from '../../components/button/PrimaryButton';

import './style.css';
import TextTile from '../../components/tile/TextTile';
import LoremIpsumShort from '../../components/loremIpsum/LoremIpsumShort';
import LoremIpsumLong from '../../components/loremIpsum/LoremIpsumLong';
import ElementsTile from '../../components/tile/ElementsTile';
import TitleH3 from '../../components/title/title-h3-bold';

export default function Page() {

    const [count, setCount] = createSignal(0);
    createEffect(() => console.log('Hello world', count()))

    return (
        <>
            <TitleH2 color='emerald' text='Acceuil' intensity='500' />
            <div class='flex gap-4'>
                <div class='flex flex-col gap-4'>
                    <TextTile>
                        <LoremIpsumShort />
                    </TextTile>
                    <TitleH3 color='emerald' text='Lorem ipsum' />
                    <ElementsTile gap={5} flexDirection='row'>
                        <PrimaryButton color='green' text='Hello world' onClick={() => setCount(count() + 1)} />
                        <Show when={count()} fallback={<p class="text-green-800 font-medium m-2">Cliquez sur le bouton</p>}>
                            <p class="text-green-800 font-medium m-2">Nombre de 'Hello world' : {count()}</p>
                        </Show>
                    </ElementsTile>
                </div>
                <TextTile>
                    <LoremIpsumLong />
                </TextTile>
            </div>



        </>)
}