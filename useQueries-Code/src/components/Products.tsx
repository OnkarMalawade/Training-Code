import { useQuery } from "@tanstack/react-query";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const fetchProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
};

const Products = () => {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => fetchProducts(),
    // staleTime: 10000,

    //fetch("https://fakestoreapi.com/products").then((res) => res.json()),
  });

  //   const [products, setProducts] = useState([]);
  //   const [isLoading, setIsLoading] = useState(false);
  //   const [error, setError] = useState(null);

  //   useEffect(() => {
  //     //   setLoading(true);
  //     //   fetch("https://fakestoreapi.com/products")
  //     //     .then((res) => res.json())
  //     //     .then((data) => {
  //     //       setProducts(data);
  //     //       setLoading(false);
  //     //     })
  //     //     .catch((e) => {
  //     //       setError(e);
  //     //       setLoading(false);
  //     //     });
  //     const fetchProducts = async () => {
  //       try {
  //         setIsLoading(true);
  //         setError(null);
  //         //   const res = await axios.get("https://fakestoreapi.com/products");
  //         //   setProducts(res.data);
  //         const response = await fetch("https://fakestoreapi.com/products");
  //         const data = await response.json();
  //         setProducts(data);
  //         setIsLoading(false);
  //       } catch (error) {
  //         setError(error.message);
  //         setIsLoading(false);
  //       }
  //     };
  //     fetchProducts();
  //   }, []);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  if (error) {
    return <h3>Error : {error}</h3>;
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <img
                alt={product.title}
                src={product.image}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link to={`/products/${product.id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.category}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
