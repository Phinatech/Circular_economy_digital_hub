import React, { createContext, useState } from 'react';
import MarketplaceFilters from '../components/Marketplace/MarketplaceFilters';
import { products } from '../assets/data/marketplacedata';

export const MarketplaceContext = createContext();

export const MarketplaceProvider = ({ children }) => {
    const [selectedFilters, setFilters] = useState({
        category: 'all',
        sustainabilityLevel: 3,
        priceRange: [0, 5000],
        materials: [],
        location: null
    });

    const filteredProducts = products.filter(product => (
        product.sustainabilityRating >= selectedFilters.sustainabilityLevel &&
        product.price >= selectedFilters.priceRange[0] &&
        product.price <= selectedFilters.priceRange[1] &&
        (selectedFilters.materials.length === 0 || 
         product.materials.some(m => selectedFilters.materials.includes(m))) &&
        (!selectedFilters.location || product.location === selectedFilters.location)
    ));

    return (
        <MarketplaceContext.Provider value={{ filteredProducts, selectedFilters, setFilters }}>
            {children}
        </MarketplaceContext.Provider>
    );
};