type linkList = {
    name: string,
    link: string,
}

export default function NavLinks() {

    let linkList: linkList[] = [
        {
            name: 'Formulaire',
            link: '/form',
        },
        {
            name: 'APOD',
            link: '/apod',
        },
        {
            name: 'To do list',
            link: '/to-do',
        },
        {
            name: 'Prisma demo',
            link: '/prisma-demo',
        },
        {
            name: 'Lien 5',
            link: '#',
        },
        {
            name: 'Lien 6',
            link: '#',
        },
        {
            name: 'Lien 7',
            link: '#',
        }
    ]

    return (
        <>
            {linkList.map((link, index) => {
                if (index % 2 == 0) {
                    return (
                        <div class='bg-zinc-100 w-full text-center p-1'>
                            <a class='text-4xl' href={link.link}>{link.name}</a>
                        </div>
                    )
                }
                else {return(
                    <div class='bg-zinc-50 w-full text-center p-1'>
                        <a class='text-4xl' href={link.link}>{link.name}</a>
                    </div>
                )
                }
            })}
        </>)
}