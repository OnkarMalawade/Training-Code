import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  const [ascending, setAscending] = useState(true);

  const fetchData = async (order = "asc") => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      const sortedData = res.data.sort((a, b) =>
        order === "asc" ? a.price - b.price : b.price - a.price
      );
      setData(sortedData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData("asc");
  }, []);

  const toggleSort = () => {
    fetchData(ascending ? "desc" : "asc");
    setAscending(!ascending);
  };

  return (
    <div>
      <Link to="/products">Products</Link>
      <button
        onClick={toggleSort}
        className="bg-blue-500 text-white px-4 py-2 rounded-md my-4"
      >
        Sort by Price ({ascending ? "Ascending" : "Descending"})
      </button>
      <div className="grid md:grid-cols-4 gap-4">
        {data.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img className="w-full" src={product.image} alt={product.title} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{product.title}</div>
                <p className="text-gray-700 text-base">{product.description}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {product.category}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  ${product.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
