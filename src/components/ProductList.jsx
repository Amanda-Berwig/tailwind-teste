import { useState, useEffect } from "react";
import buscarDados from "./BuscarDados";

// const products = [
//   {
//     id: 1,
//     name: "Basic Tee",
//     href: "#",
//     imageSrc:
//       "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: "$35",
//     color: "Black",
//   },
//   // More products...
// ];

export default function Example() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await buscarDados();
      setProducts(data);
      console.log(data); // Verifique os dados no console
    }
    fetchData();
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Escolha seus produtos
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="p-4 border border-gray-300 rounded group relative"
            >
              <img
                alt={product.slug}
                src={product.images[0]}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.category.name}
                  </p>
                </div>
              </div>
              <span className="absolute bottom-1">
                <p className="text-sm font-medium text-gray-900 ">
                  {`R$ ${product.price}`}
                </p>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
