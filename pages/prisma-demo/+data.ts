import { UserType } from "../../type/users/usersType";

export type Data = Awaited<ReturnType<typeof data>>;

export default async function data() {
    const response = await fetch('http://localhost:3005/users/get-all-users');
    const data = await response.json();

    return data;
}

