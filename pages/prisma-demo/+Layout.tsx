import { FlowProps } from "solid-js"
import { NavPrismaDemo } from "../../components/navLinks/NavLinks"
import TitleH3 from "../../components/title/title-h3-bold"
import PrismaBrandName from "../../components/brandName/PrismaBrandName"

export default function Layout(props: FlowProps) {
    return (<>
        <div class='flex justify-between items-center gap-3 w-full bg-orange-100'>
            <PrismaBrandName />
            <NavPrismaDemo />
        </div>
        {props.children}
    </>)
}