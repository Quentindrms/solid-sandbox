import { type JSX } from "solid-js";
import NavLinks from "../components/navLinks/NavLinks"

export default function Layout(props: { children?: JSX.Element }) {
    return (
        <div class="flex h-screen">
            <Sidebar />
            <Content>{props.children}</Content>
        </div>
    )
}

function Sidebar() {
    return (
        <div class='w-64 flex flex-col h-full bg-gray-100 border-r border-gray-200'>
            <NavLinks />
        </div>
    )
}

function Content(props: { children: JSX.Element }) {
    return (
        <div class='flex-1 overflow-auto'>
            <div class='p-6'>
                {props.children}
            </div>
        </div>
    )
}