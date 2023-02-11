import { createContext, useReducer, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import * as productService from '../services/productService';

export const ProductContext = createContext();

const productReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_PRODUCTS':
            return action.payload.map(x => ({ ...x}));
        case 'ADD_PRODUCT':
            return [...state, action.payload];
        default:
            return state;
    }
};

export const GameProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [product, dispatch] = useReducer(productReducer, []);

    useEffect(() => {
        productService.getAll()
            .then(result => {
                const action = {
                    type: 'ADD_PRODUCTS',
                    payload: result
                };

                dispatch(action);
            });
    }, []);


    const productAdd = (productData) => {
        dispatch({
            type: 'ADD_PRODUCT',
            payload: productData,
        })

        navigate('/catalog');
    };

    return (
        <ProductContext.Provider value={{productAdd}}>
            {children}
        </ProductContext.Provider>
    );
}