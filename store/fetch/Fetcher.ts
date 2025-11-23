
export type Road = 'articles' | 'categories' | 'commandes' | 'utilisateur';

export type fetcherParameters = {
    road : 'articles' | 'categories' | 'commandes' | 'users';
    endpoint: string,
    params?: string
}

export async function fetcher(props:fetcherParameters) {
    console.log(props.endpoint)
    const source = `${import.meta.env.BACKEND_URL}/${props.road}/${props.endpoint}/${props.params ? props.params : ''}`;
    console.log('Source : ', source);
    const result = await fetch(source)
    const data = await result.json();
    return data;
}



