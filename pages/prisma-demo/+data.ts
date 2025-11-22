
export type Data = Awaited<ReturnType<typeof data>>;

export default async function data() {
    const response = await fetch('http://localhost:3005/users/get-all-users');
    const data = await response.json();

    return data;
}

export async function changeStatus(id: number, status: boolean){
    const response = await fetch(`http://localhost:3005/users/change-user-status/${id}/${status}`);
    const data = await response.json();
    console.log(data);
}

export async function updateUser(id: number, nom: string, prenom: string, email: string){
    
}

