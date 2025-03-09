import React from 'react';
import SustainabilityBadge from './SustainabilityBadge';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover rounded-lg"
        />
        <SustainabilityBadge rating={product.sustainabilityRating} />
      </div>
      
      <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
      <div className="flex items-center justify-between mt-2">
        <span className="text-green-600 font-medium">
          {product.price} EcoTokens
        </span>
        <span className="text-sm text-gray-500">
          ♻️ {product.recycledContent}% Recycled
        </span>
      </div>
      
      <div className="mt-4 flex justify-between items-center">
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
          View Details
        </button>
        <span className="text-sm text-gray-500">
          {product.location} 🌍
        </span>
      </div>
    </div>
  );
};

export default ProductCard;