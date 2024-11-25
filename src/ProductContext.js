import React, { createContext, useState, useContext } from "react";

// Create Context
const ProductContext = createContext();

// Create a custom hook to access the context
export const useProduct = () => {
    return useContext(ProductContext);
};

// Provider component
export const ProductProvider = ({ children }) => {
    const [productInfo, setProductInfo] = useState({
        img: "",
        altText: "",
        title: "",
        description: "",
        price: null,
        externalLink: "",
        route: "",
    });

    const updateProductRoute = (product) => {
        setProductInfo(product);
    };

    const resetProductRoute = () => {
        setProductInfo({
            img: "",
            altText: "",
            title: "",
            description: "",
            price: null,
            externalLink: "",
            route: "",
        });
    };

    return (
        <ProductContext.Provider value={{ productInfo, updateProductRoute, resetProductRoute }}>
            {children}
        </ProductContext.Provider>
    );
};
