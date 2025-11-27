import clsx from "clsx";
import type {JSX} from "solid-js"

export interface PrimaryButtonProps extends JSX.HTMLAttributes<HTMLButtonElement>{
    text: string,
    color: ColorType,
    size?: SizeType,
    fontWeight?: FontWheightType,
}

type SizeType = 'small' | 'medium' | 'large';
type ColorType = 'yellow' | 'green' | 'sky' | 'blue' | 'purple'
type FontWheightType = 'light' | 'normal' | 'medium' | 'bold'

const colorClasses = {
    yellow: 'bg-yellow-700',
    green: 'bg-green-700',
    sky: 'bg-sky-700',
    blue: 'bg-blue-700',
    purple: 'bg-purple-700',
}

const sizeClasses: Record<SizeType, string> = {
    small: 'w-s',
    medium: 'w-md',
    large: 'w-xl',
}

const fontWheightClasses : Record<FontWheightType, string> = {
    light : 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    bold: 'font-bold',
}

function getSizeClasse(size: SizeType|undefined): string {
    return sizeClasses[size ?? 'medium']
}

function getColorClasses(color: ColorType | undefined){
    return colorClasses[color ?? 'yellow'];
}

function getFontWeight(font: FontWheightType | undefined): string {
    return fontWheightClasses[font ?? 'normal'];
}

export function PrimaryButton({ text, color, size, fontWeight }: PrimaryButtonProps) {
    return (
        <div class={clsx([getSizeClasse(size)], getColorClasses(color), getFontWeight(fontWeight),'rounded-2xl', 'text-center', 'text-gray-50', 'cursor-pointer')}>
            {text}
        </div>
    )
}

export default PrimaryButton;