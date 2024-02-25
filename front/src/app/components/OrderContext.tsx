"use client";
import React, { createContext, useState, useContext } from "react";

export const OrderContext = createContext({});

export const OrderProvider = ({ children }: any) => {
  const [orderDetails, setOrderDetails] = useState({
    district: "",
    khoroo: "",
    apartment: "",
  });

  return (
    <OrderContext.Provider value={{ orderDetails, setOrderDetails }}>
      {children}
    </OrderContext.Provider>
  );
};
