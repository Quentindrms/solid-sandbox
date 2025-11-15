type TitleH2Props = {
    color: 'red' | 'blue' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald';
    text: string;
}

export function TitleH2({text, color}:TitleH2Props){

    const colorClasses = {
        red: 'text-red-500',
        blue: 'text-blue-500',
        orange: 'text-orange-500',
        amber: 'text-amber-500',
        yellow: 'text-yellow-500',
        lime: 'text-lime-500',
        green: 'text-green-500',
        emerald: 'text-emerald-500',
    };

    return(<h2 class={`font-bold ${colorClasses[color]} text-5xl m-2 p-2`}>{text}</h2>)
}

export default TitleH2;