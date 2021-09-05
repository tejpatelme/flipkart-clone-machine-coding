import React, { createContext, useContext } from "react";
import data from "../data/products.json";

const ProductsContext = createContext();

export default function ProductsProvider({ children }) {
  const products = [...data];
  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
}

export const useProducts = () => useContext(ProductsContext);
