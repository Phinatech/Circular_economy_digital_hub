import React from 'react';
import MarketplaceFilters from './MarketplaceFilters';
import MarketplaceHeader from './MarketplaceHeader';
import ProductGrid from './ProductGrid';
import BarterSystem from './BarterSystem';
import SustainabilityMetrics from './SustainabilityMetrics';

const Marketplace = () => {
    return (
        <div>
            <MarketplaceHeader />
            <MarketplaceFilters />
            <ProductGrid />
            <BarterSystem />
            <SustainabilityMetrics />
        </div>
    );
};

export { MarketplaceFilters, MarketplaceHeader, ProductGrid, BarterSystem, SustainabilityMetrics };
export default Marketplace;
