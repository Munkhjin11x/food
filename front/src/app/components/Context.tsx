'use client'
import { useState } from "react";
import { createContext } from "react";

export const FoodContext = createContext({ foodData:"", addToCart: () => {} });
export const FoodProvider = ({ children }:any) => {

    const [foodData, setFoodData] = useState<any>([]);
    const addToCart: any = (foodItem:any) => {
        setFoodData([...foodData, foodItem]);
    };

    return (
        <FoodContext.Provider value={{ foodData, addToCart }}>
            {children}
        </FoodContext.Provider>
    );
};