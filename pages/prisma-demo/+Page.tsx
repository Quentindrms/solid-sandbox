import { useData } from "vike-solid/useData";
import type { Data } from "./+data";
import TitleH3 from "../../components/title/title-h3-bold";
import UsersTilesCount from "../../components/prisma-demo/tiles/UsersTilesCount";


export default function PrismaDemo() {

    const fetchedData = useData<Data>();
    console.log(fetchedData);
    return (
        <>
            <TitleH3 color="green" text="Tableau de bord" />
            <UsersTilesCount data={fetchedData.userCount}/>
        </>
        )
}