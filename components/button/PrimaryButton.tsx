
type PrimaryButtonProps = {
    text: string,
    color: 'yellow' | 'green' | 'sky' | 'blue' | 'purple',
    onClick?: (e:Event) => void;
}

export function PrimaryButton({text, color, onClick}:PrimaryButtonProps){
    const colorClasses = {
        yellow : 'bg-red-700',
        green : 'bg-green-700',
        sky: 'bg-sky-700',
        blue: 'bg-blue-700',
        purple: 'bg-purple-700',
    }

    return(
    <div class={`btn ${colorClasses[color]} text-stone-200 max-w-fit p-2 rounded-md`}  onClick={onClick}>
        {text}
    </div>
    )
}

export default PrimaryButton;