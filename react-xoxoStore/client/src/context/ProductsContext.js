import { createContext, useReducer, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import * as productService from '../services/productService';

const ProductContext = createContext();


export const ProductProvider = ({children}) => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([])

    useEffect(() => {
        productService.getAll()
            .then(result => {
                setProducts(result)
                console.log(result)
                // dispatch(action);
            });
    }, []);


    return (
        <ProductContext.Provider value={{
            products
        }}>
            {children}
        </ProductContext.Provider>
    );
}