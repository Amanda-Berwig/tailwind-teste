import { useState, useEffect } from "react";
import buscarDados from "../services/BuscarDados";

export const useApi = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const dataProducts = await buscarDados("products");
      const dataCategories = await buscarDados("categories");

      setCategories(dataCategories);
      setProducts(dataProducts);
    }
    fetchData();
  }, []);

  return {
    products,
    categories,
  };
};
