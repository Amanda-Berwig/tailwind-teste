import { useState, useEffect } from "react";
import buscarDados from "../BuscarDados";

export const useApi = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await buscarDados();
      setProducts(data);
      console.log(data); // Verifique os dados no console
    }
    fetchData();
  }, []);

  return {
    products,
  };
};
