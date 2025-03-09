// src/pages/Marketplace.jsx
import React from 'react';
import MarketplaceFilters from "../components/Marketplace/MarketplaceFilters";
import { MarketplaceProvider } from '../context/MarketplaceContext';
import MarketplaceHeader from '../components/Marketplace/MarketplaceHeader';
import ProductGrid from '../components/Marketplace/ProductGrid';
import BarterSystem from '../components/Marketplace/BarterSystem';
import SustainabilityMetrics from '../components/Marketplace/SustainabilityMetrics';

const Marketplace = () => {
  return (
    <MarketplaceProvider>
      <div className="min-h-screen bg-gray-50">
        {/* Marketplace Header */}
        <MarketplaceHeader />
        
        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <MarketplaceFilters />
            </div>
            
            {/* Product Grid */}
            <div className="lg:col-span-2">
              <ProductGrid />
            </div>
            
            {/* Barter & Metrics */}
            <div className="lg:col-span-1">
              <BarterSystem />
              <SustainabilityMetrics />
            </div>
          </div>
        </main>
      </div>
    </MarketplaceProvider>
  );
};

export default Marketplace;