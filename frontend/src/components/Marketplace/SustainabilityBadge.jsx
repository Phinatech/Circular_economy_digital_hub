import React from 'react';
import { Tooltip } from 'react-tooltip';

// components/Marketplace/SustainabilityBadge.jsx

const SustainabilityBadge = ({ rating }) => (
    <div className="relative group">
        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center text-sm transition-transform transform group-hover:scale-105">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            {rating}/5 Circular Score
        </div>
        <Tooltip className="absolute top-10 right-2 bg-gray-700 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
            This score represents the sustainability of the product.
        </Tooltip>
    </div>
);

export default SustainabilityBadge;