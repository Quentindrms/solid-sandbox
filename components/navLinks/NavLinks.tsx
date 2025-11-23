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
                else {
                    return (
                        <div class='bg-zinc-50 w-full text-center p-1'>
                            <a class='text-4xl' href={link.link}>{link.name}</a>
                        </div>
                    )
                }
            })}
        </>)
}

export function NavPrismaDemo() {
    let linkList: linkList[] = [
        {
            name: 'Utilisateurs',
            link: '/prisma-demo/utilisateurs',
        },
        {
            name: 'Commandes',
            link: '/commandes',
        },
        {
            name: 'Articles',
            link: '/articles', 
        },
        {
            name: 'Catégories',
            link: '/prisma-demo/categories',
        },
    ]
    return(
        <div class='flex gap-2 text-center'>
            {linkList.map((item) => (
                <a href={item.link} class='p-2 m-1 text-2xl hover:text-violet-500'>{item.name}</a>
            ))}
        </div>
    )
}