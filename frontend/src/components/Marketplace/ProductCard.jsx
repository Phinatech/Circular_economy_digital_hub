import React, { useState, useEffect } from 'react';
import Loading from './Loading/Loading';
import ProductCard from './Marketplace/ProductCard';

const ProductList = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts()
            .then(data => {
                setProducts(data);
                setIsLoading(false);
            });
    }, []);

    return (
        <div>
            {isLoading ? (
                <Loading message="Fetching products..." />
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProductList;
