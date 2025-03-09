import React from 'react';

const BarterSystem = () => (
    <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
        <h3 className="text-xl font-semibold mb-4">Trade Offers</h3>
        <div className="space-y-4">
            <input 
                type="text" 
                placeholder="Propose trade..." 
                className="w-full p-2 border rounded-lg"
            />
            <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">
                Initiate Barter
            </button>
        </div>
    </div>
);

export default BarterSystem;