
export type Data = Awaited<ReturnType<typeof data>>;

export default async function data() {
    const response = await fetch('http://localhost:3005/users/get-all-users');
    const data = await response.json();
    console.log('Data ', data)
    return data;
}
export async function updateData() {
    const response = await fetch('http://localhost:3005/users/get-all-users');
    const data = await response.json();

    return data;
}

export async function changeStatus(id: number, status: boolean){
    const response = await fetch(`http://localhost:3005/users/change-user-status/${id}/${status}`);
    const data = await response.json();
}

export async function updateUser(id: number, nom: string, prenom: string, email: string){
    const response = await fetch(`http://localhost:3005/users/update-user/${id}/${nom}/${prenom}/${email}`);
    const data = await response.json();
}

