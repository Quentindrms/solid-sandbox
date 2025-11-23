import PrimaryButton from "../../button/PrimaryButton"

type ArticlesTitleProps = {
    quantity: number,
    totalArticle: number,
}

export default function ArticlesTile({ quantity, totalArticle }: ArticlesTitleProps) {

    return (<>
        <div class='flex flex-col gap-4 border-2 border-gray-100 w-md'>
            <div>
                <div class='bg-gray-50 w-fit p-2 rounded-xl flex gap-2'>
                    <p class='' >Nombre d'article avec une quantité faible : <strong>{quantity}</strong></p>
                    <PrimaryButton color="green" text="Consulter les stocks" />
                </div>
            </div>
            <div class='bg-gray-50 w-fit p-2 rounded-xl flex gap-2'>
                <p class='' >Nombre d'article avec une quantité faible : <strong>{totalArticle}</strong></p>
            </div>
        </div>
    </>)
}