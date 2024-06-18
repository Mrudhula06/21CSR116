import React, { useEffect, useState } from 'react';
import productService from '../services/productService';
import Product from './Product';

const ProductList = ({ topN }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productService.getTopProducts(topN)
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, [topN]);

  return (
    <div>
      <h2>Top {topN} Products</h2>
      <div className="product-list">
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
