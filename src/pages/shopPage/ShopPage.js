import { useProduct } from "../../ProductContext"; 
import {NavLink} from 'react-router-dom';

export const Shop = ({ products }) => {
    const { updateProductRoute } = useProduct();

    return (
        <div>
            <h1>Products</h1>
            <div>
                {products.map((product, i) => {
                    const handleSelection = () => {
                        console.log("Selecting product:", product.title);
                        updateProductRoute(product);
                    };
                    return (
                        <div key={i}>
                            <NavLink to="/product" onClick={handleSelection}>
                                <div className="">
                                    <img src={product.img} alt={product.altText} />
                                    <p>{product.title}</p>
                                    <p>${product.price}.00</p>
                                </div>
                            </NavLink>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
