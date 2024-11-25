import { useProduct } from "../../ProductContext"; 

export const Product = () => {
    const { productInfo } = useProduct();

    if (!productInfo.title) {
        return <p>No product selected!</p>;
    }

    return (
        <div>
            <img src={productInfo.img} alt={productInfo.altText} />
            <p>{productInfo.title}</p>
            <p>{productInfo.description}</p>
            <p>
                <a href={productInfo.externalLink} target="_blank" rel="noopener noreferrer">
                    Buy on Amazon
                </a>
            </p>
            <p>${productInfo.price}</p>
            <input
                type="number"
                aria-label="Quantity"
                max="99999"
                min="1"
                defaultValue="1"
            />
            <button>Add to cart</button>
        </div>
    );
};
