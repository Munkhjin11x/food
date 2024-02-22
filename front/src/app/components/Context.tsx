'use client'
import { useState } from "react";
import { createContext } from "react";

export const FoodContext = createContext({ foodData:"", addToCart: () => {}, updateFoodData:() => {} });
export const FoodProvider = ({ children }:any) => {

    const [foodData, setFoodData] = useState<any>([]);
    const updateFoodData: any = (updatedFoodData:any) => {
        setFoodData(updatedFoodData);
      };
    const addToCart: any = (foodItem:any) => {
        setFoodData([...foodData, foodItem]);
    };

    return (
        <FoodContext.Provider value={{ foodData, addToCart ,updateFoodData }}>
            {children}
        </FoodContext.Provider>
    );
};