/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const fetchProduct = async () => {
    try {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, [id]);

  return (
    <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-6 space-y-4">
      <div className="flex justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-64 h-64 object-contain rounded-lg"
        />
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-800">
          {product.title}
        </h2>
        <p className="text-gray-600 text-base mt-2">{product.description}</p>
      </div>
      <div className="flex justify-center gap-4 mt-6">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-200">
          Edit Product
        </button>
        <button className="px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition ease-in-out duration-200">
          Delete Product
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
