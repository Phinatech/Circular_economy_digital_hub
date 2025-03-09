import React, { createContext, useState } from 'react';
import { products } from '../assets/data/marketplaceData';

export const MarketplaceContext = createContext();

export const MarketplaceProvider = ({ children }) => {
  const [selectedFilters, setFilters] = useState({
    category: 'all',
    sustainabilityLevel: 3,
    priceRange: [0, 1000]
  });

  const filteredProducts = products.filter(product => (
    product.sustainabilityRating >= selectedFilters.sustainabilityLevel &&
    product.price >= selectedFilters.priceRange[0] &&
    product.price <= selectedFilters.priceRange[1]
  ));

  return (
    <MarketplaceContext.Provider value={{ filteredProducts, selectedFilters, setFilters }}>
      {children}
    </MarketplaceContext.Provider>
  );
};