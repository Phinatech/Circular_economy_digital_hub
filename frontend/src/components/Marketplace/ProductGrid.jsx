import React from 'react';

const ProductGrid = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Example Product Card */}
            <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-semibold">Product Name</h4>
                <p>Description of the product.</p>
                <button className="mt-2 bg-blue-500 text-white py-1 px-2 rounded">View Details</button>
            </div>
            {/* Add more product cards as needed */}
        </div>
    );
};

export default ProductGrid;
