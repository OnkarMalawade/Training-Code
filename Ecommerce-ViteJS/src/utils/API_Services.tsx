import axios from "axios";

const API = axios.create({ baseURL: "https://fakestoreapi.com" });

export const getAllProducts = () => {
  return API.get("/products");
};

export const getProductsByID = (id) => {
  return API.get(`/products/${id}`);
};

export const getByCategory = (category) => {
  return API.get(`/products/category/${category}`);
};
