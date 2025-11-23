
type ArticlesTitleProps = {
    quantity: number,
}

export default function ArticlesTile({quantity}:ArticlesTitleProps) {

    return (
        <>
            <div class='bg-gray-50 w-fit p-2 rounded-xl flex'>
                <p class='' >Nombre d'article avec une quantité faible : <strong>{quantity}</strong></p>
            </div>
        </>
    )
}