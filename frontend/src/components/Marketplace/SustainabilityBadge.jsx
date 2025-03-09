// components/Marketplace/SustainabilityBadge.jsx
const SustainabilityBadge = ({ rating }) => (
    <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center text-sm">
      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
      {rating}/5 Circular Score
    </div>
  );