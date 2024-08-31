import React, { useState, useEffect } from 'react';
import Card from './components/Card';

function App() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [priceFilter, setPriceFilter] = useState(null); 

  useEffect(()=>{
    fetch('http://fakestoreapi.com/products')
    .then((res) => res.json())
  .then((data) => setProducts(data));
  },[])

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  const handlePriceFilter = (maxPrice) => {
    setPriceFilter(maxPrice);
  };

  const filteredProducts = products.filter(product => {
    const matchesSearchQuery = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPriceFilter = priceFilter ? product.price  : true;
    return matchesSearchQuery && matchesPriceFilter;
  });

  return (
    <div>
      <h1 className='mb-2 my-5 text-3xl font-bold text-center'>Search and Filter Product</h1>
      <form className="max-w-md mx-auto" onSubmit={handleSearchSubmit}>
        <div className="relative">

          <input
            type="search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            required
          />

          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
          
        </div>
      </form>

      <div className="flex justify-center space-x-4 mt-4">
        {[100, 200, 300, 400, 500].map(price => (
          <button
            key={price}
            onClick={() => handlePriceFilter(price)}
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Less Than {price}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filteredProducts.map(product => (
          <Card
            key={product.id}
            title={product.title}
            image={product.image}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default App;