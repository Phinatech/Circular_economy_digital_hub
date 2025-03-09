import React, { useContext } from 'react';
import { MarketplaceContext } from '../../context/MarketplaceContext';
import { Listbox, RadioGroup, Transition } from '@headlessui/react';
import { FaFilter, FaLeaf, FaMoneyBillWave, FaMapMarkerAlt } from 'react-icons/fa';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const MarketplaceFilters = () => {
  const { selectedFilters, setFilters } = useContext(MarketplaceContext);
  
  // Filter options data
  const sustainabilityLevels = [
    { value: 3, label: '★★★☆☆ & Up' },
    { value: 4, label: '★★★★☆ & Up' },
    { value: 4.5, label: '★★★★½ & Up' }
  ];

  const materialTypes = [
    { id: 'plastic', name: 'Plastic', color: 'bg-blue-500' },
    { id: 'metal', name: 'Metal', color: 'bg-gray-500' },
    { id: 'textile', name: 'Textile', color: 'bg-purple-500' },
    { id: 'electronics', name: 'Electronics', color: 'bg-yellow-500' }
  ];

  const handleFilterChange = (name, value) => {
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm sticky top-6">
      <div className="flex items-center mb-6">
        <FaFilter className="w-5 h-5 text-green-600 mr-2" />
        <h2 className="text-xl font-semibold">Filter Products</h2>
      </div>

      {/* Sustainability Rating Filter */}
      <div className="mb-8">
        <div className="flex items-center mb-4 text-green-600">
          <FaLeaf className="mr-2" />
          <span className="font-medium">Sustainability</span>
        </div>
        <RadioGroup
          value={selectedFilters.sustainabilityLevel}
          onChange={(value) => handleFilterChange('sustainabilityLevel', value)}
        >
          <div className="space-y-2">
            {sustainabilityLevels.map((level) => (
              <RadioGroup.Option
                key={level.value}
                value={level.value}
                className={({ checked }) => `
                  ${checked ? 'bg-green-50 border-green-500' : 'border-gray-200'}
                  relative border rounded-lg p-3 cursor-pointer transition-colors
                `}
              >
                {({ checked }) => (
                  <div className="flex items-center">
                    <div className={`mr-2 w-4 h-4 rounded-full border-2 
                      ${checked ? 'border-green-500 bg-green-100' : 'border-gray-300'}`}
                    />
                    <span className="text-sm">{level.label}</span>
                  </div>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>

      {/* Price Range Filter */}
      <div className="mb-8">
        <div className="flex items-center mb-4 text-green-600">
          <FaMoneyBillWave className="mr-2" />
          <span className="font-medium">Price Range (EcoTokens)</span>
        </div>
        <Slider
          range
          min={0}
          max={5000}
          value={selectedFilters.priceRange}
          onChange={(value) => handleFilterChange('priceRange', value)}
          trackStyle={[{ backgroundColor: '#10B981' }]}
          handleStyle={[
            { borderColor: '#10B981', boxShadow: 'none' },
            { borderColor: '#10B981', boxShadow: 'none' }
          ]}
        />
        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <span>{selectedFilters.priceRange[0]}</span>
          <span>{selectedFilters.priceRange[1]}</span>
        </div>
      </div>

      {/* Material Type Filter */}
      <div className="mb-8">
        <div className="flex items-center mb-4 text-green-600">
          <FaFilter className="mr-2" />
          <span className="font-medium">Material Type</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {materialTypes.map((material) => (
            <button
              key={material.id}
              onClick={() => handleFilterChange(
                'materials', 
                selectedFilters.materials?.includes(material.id) ?
                  selectedFilters.materials.filter(m => m !== material.id) :
                  [...(selectedFilters.materials || []), material.id]
              )}
              className={`p-2 rounded-lg text-sm flex items-center justify-center
                ${selectedFilters.materials?.includes(material.id) 
                  ? `${material.color} text-white` 
                  : 'bg-gray-100 hover:bg-gray-200'}
              `}
            >
              {material.name}
            </button>
          ))}
        </div>
      </div>

      {/* Location Filter */}
      <div className="mb-8">
        <div className="flex items-center mb-4 text-green-600">
          <FaMapMarkerAlt className="mr-2" />
          <span className="font-medium">Location</span>
        </div>
        <Listbox
          value={selectedFilters.location}
          onChange={(value) => handleFilterChange('location', value)}
        >
          <div className="relative">
            <Listbox.Button className="w-full p-2 border rounded-lg text-left text-sm">
              {selectedFilters.location || 'Select Region'}
            </Listbox.Button>
            <Transition
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-lg py-1 text-sm">
                {['Global', 'Europe', 'North America', 'Asia', 'Local'].map((region) => (
                  <Listbox.Option
                    key={region}
                    value={region}
                    className={({ active }) =>
                      `${active ? 'bg-green-50 text-green-900' : 'text-gray-900'}
                      cursor-pointer select-none relative py-2 pl-3 pr-4`
                    }
                  >
                    {region}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>

      <button
        onClick={() => setFilters({
          category: 'all',
          sustainabilityLevel: 3,
          priceRange: [0, 5000],
          materials: [],
          location: null
        })}
        className="w-full py-2 text-sm text-green-600 hover:bg-green-50 rounded-lg transition-colors"
      >
        Clear All Filters
      </button>
    </div>
  );
};

export default MarketplaceFilters;