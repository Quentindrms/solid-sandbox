type linkList = {
    name: string,
    link: string,
}

export default function NavLinks() {

    let linkList: linkList[] = [
        {
            name: 'Lien 1',
            link: '#',
        },
        {
            name: 'Lien 2',
            link: '#',
        },
        {
            name: 'Lien 3',
            link: '#',
        },
        {
            name: 'Lien 4',
            link: '#',
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
                        <div class='bg-gray-300 w-full text-center'>
                            <a class='text-2xl' href={link.link}>{link.name}</a>
                        </div>
                    )
                }
                else {return(
                    <div class='bg-gray-100 w-full text-center'>
                        <a class='text-2xl' href={link.link}>{link.name}</a>
                    </div>
                )
                }
            })}
        </>)
}