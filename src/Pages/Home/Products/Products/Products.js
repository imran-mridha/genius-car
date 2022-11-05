import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import {Link} from 'react-router-dom'

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err))
  }, [])
  return (
    <div className='container mx-auto my-20'>
      <div className="section-title text-center">
        <p className="text-xl font-bold text-theme-default">Popular Products</p>
        <h2 className='text-theme-dark text-5xl font-bold my-5'>Browse Our Products</h2>
        <p className='w-6/12 mx-auto text-theme-text'>
        the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
        </p>
      </div>
      <div className='product-card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
        {
          products.map(product => <ProductCard key={product._id} product={product} />)
        }
      </div>
      <div className='more-services text-center'>
        <Link
          to="/"
          class="font-semibold transition-colors text-theme-default duration-200  text-lg border border-theme-default bg-transparent hover:bg-theme-default hover:border-theme-default hover:text-white rounded-md py-3 px-6"
          aria-label="Discover More"
          title="Discover More"
        >
          More Products
        </Link>
      </div>
    </div>
  );
};

export default Products;