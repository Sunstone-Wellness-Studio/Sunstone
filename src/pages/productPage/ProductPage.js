import { useProduct } from "../../ProductContext";

export const Product = (props) => {
  // const { productInfo } = useProduct();

  // if (!productInfo.title) {
  //     return <p>No product selected!</p>;
  // }

  return (
    <div id="productsSection">
      <h3>Products</h3>
      {props.products.map((productInfo, i) => {
        return (
          <div>
            
            <div className="products">
              <div className="offHoverDisplay">
                <img
                  src={productInfo.img}
                  alt={productInfo.altText}
                  className="productImg"
                />
                <p>{productInfo.title}</p>
              </div>
              <div className="onHoverDisplay">
                <div >
                  <img
                    src={productInfo.img}
                    alt={productInfo.altText}
                    className="productImg"
                  />
                  <p>{productInfo.title}</p>
                </div>
                <div className="hoverDescription">
                  <p>{productInfo.description}</p>
                  <br />
                  <a href={productInfo.externalLink}>
                    Buy on Amazon
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {/* <img src={productInfo.img} alt={productInfo.altText} />
            <p>{productInfo.title}</p>
            <p>{productInfo.description}</p>
            <p>
                <a href={productInfo.externalLink} target="_blank" rel="noopener noreferrer">
                    Buy on Amazon
                </a>
            </p>
            <p>${productInfo.price}</p> */}
      {/* <input
                type="number"
                aria-label="Quantity"
                max="99999"
                min="1"
                defaultValue="1"
            />
            <button>Add to cart</button> */}
    </div>
  );
};
